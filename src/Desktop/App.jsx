// @flow
import React, { Component, Fragment } from 'react'
import Atra from 'atra'
import {
  EXHIBIT_SCROLL_ID,
  DETAIL_SCROLL_ID,
  jsx,
  isNum,
  createClickA,
  winnerHeight,
  windowOn,
} from '../util.js'
import {
  ShutFromLeft,
  ShutFromTop,
  Center,
  Button,
  DimItem,
  DimBoard,
  DimSwitch,
  Preload,
  QuitDetail,
  QuitPopdown
} from './Layouts.jsx'
import {
  Listen,
  Background,
  ArrowLeft,
  ArrowWideUp,
  Popdown,
  Strap
} from './Soles.jsx'

const HEAD_HEIGHT = 90
const BUTTON_HEIGHT = 110
const BOTTOM_MARGIN = 40
const MouseDown = (props) => <Listen {...Object.assign({ type: 'onMouseDown' }, props)} />
const MouseUp = (props) => <Listen {...Object.assign({ type: 'onMouseUp' }, props)} />

type Props = {
  firstIndex: number,
  backgroundStyle: { [key: string]: string },
  Preloader: React$Component,
  links: Array<>,
  views: Array<>
}

type State = {
  preloading: boolean,
  index?: number,
  detail: {
    props?: { [data: string]: any },
    mountWithShut?: boolean
  },
  popdown: {
    src?: string
  },
  dimming: boolean,
  informs: [number, number, number, number]
}

export default class LonogaraDesktop extends Component {

  constructor(props) {
    super(props)

    props.orph.attach(this)
    this.listeners = props.orph.order([
      'WINDOW:RESIZE_FORCE_UPDATE',
      'RENDER:PRELOADING_OFF',
      'DOM:DETAIL_OFF',
      'DOM:VIEW_SWITCH',
      'DOM:DIM_SWITCH',
      'RENDER:POPDOWN_OFF'
    ])

    this.DetailQuit = this.HoDetailQuit()
    this.PopdownQuit = this.HoPopdownQuit()
  }


  componentDidMount() {
    windowOn("resize", this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
    this.props.orph.dispatch('REACT:DID_MOUNT')
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.views && !('noButtons' in this)) {
      this.noButtons = nextProps.views.length < 2
    }
  }

  isReady() {
    return Boolean(this.props.views)
  }

  render() {
    const isReady = this.isReady()
    return <Fragment>
      {this.Background()}
      {isReady && this.Tree()}
      {this.state.popdown.src && this.Popdown()}
      {this.state.preloading && this.Preload(isReady ? 0 : 1)}
    </Fragment>
  }

  Tree() {
    const { noButtons } = this
    const { base } = this.props.colors
    const { dimming } = this.state
    const height = winnerHeight() - HEAD_HEIGHT - (noButtons ? 80 : BUTTON_HEIGHT) - BOTTOM_MARGIN
    const view = this.props.views[this.state.index] || {}
    return(
      <div {...a('ROOT')}>
        <header {...a('HEAD', { style: { visibility: dimming && 'hidden' } })}>
          <span {...a('HEAD:WORD', { style: { color: base } })}>
            {view.head}
          </span>
        </header>
        <div {...a('MAIN', { style: { height, borderColor: base } })}>
          {this.Middle(view)}
          {this.DimSwitch()}
          {dimming && this.DimBoard()}
        </div>
        {!noButtons && <nav {...a('BUTTONS', { style: { visibility: dimming && 'hidden' } })}>
          {this.Buttons()}
        </nav>}
      </div>
    )
  }

  Background() {
    return (
      <div {...{
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }}>
        <Background {...{ style: this.props.backgroundStyle || {} }} />
        <Background {...{ style: { backgroundColor: this.props.colors.background } }} />
      </div>
    )
  }

  HoDetailQuit() {
    return ({ fn }) =>
      <QuitDetail>
        <ArrowLeft stroke={this.props.colors.detailQuit} />
        <MouseDown positionValue={-20} listener={fn} />
      </QuitDetail>
  }

  HoPopdownQuit() {
    return ({ fn }) =>
      <QuitPopdown>
        <ArrowWideUp />
        <MouseDown positionValue={-10} listener={fn} />
      </QuitPopdown>
  }

  Preload(opacity) {
    return (
      <Preload {...{
        opacity,
        onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
        backgroundColor: this.props.colors.preloader
      }}>
        <Center {...{ top: -60 }}>
          {jsx(this.props.Preloader)}
        </Center>
      </Preload>
    )
  }

  Popdown() {
    const Quit = this.PopdownQuit
    const onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
    const { src } = this.state.popdown
    return (
      <ShutFromTop {...a('POPDOWN_SHUT', { Quit, onQuitEnd })}>
        <Popdown {...{ src }} />
      </ShutFromTop>
    )
  }

  Middle(view) {
    return (
      <div {...a('MIDDLE_WRAP:BOTH')}>
        <div {...a('MIDDLE_WRAP:EXHIBIT')}>
          {jsx(view.Exhibit)}
        </div>
        <div {...a('MIDDLE_WRAP:DETAIL')}>
          {this.state.detail.props && this.Detail(view)}
        </div>
      </div>
    )
  }

  Detail(view) {
    return (
      <ShutFromLeft {...{
        mountWithShut: this.state.detail.mountWithShut,
        touchRatio: 0,
        duration: 0.55,
        background: this.props.colors.detail,
        Quit: this.DetailQuit,
        onQuitEnd: this.listeners['DOM:DETAIL_OFF']
      }}>
        {jsx(view.Detail,this.state.detail.props)}
      </ShutFromLeft>
    )
  }

  DimSwitch() {
    return (
      <DimSwitch>
        <Strap stroke={this.props.colors.base} />
        <MouseDown listener={this.listeners['DOM:DIM_SWITCH']} />
      </DimSwitch>
    )
  }

  DimBoard() {
    return (
      <DimBoard backgroundColor={this.props.colors.links}>
        <div {...a('DIM_WRAP')}>
          <Center {...{ top: -24 }}>
            <div {...{ style: this.props.links.length < 5 ? { textAlign: 'center' } : { display: 'flex' } }}>
              {this.DimItems()}
            </div>
          </Center>
        </div>
      </DimBoard>
    )
  }

  DimItems() {
    return this.props.links.map(({ href, buttonImage, coverColor, descriptionText, descriptionStyle }, index) =>
      <DimItem key={index} {...{
        size: 130,
        buttonImage,
        coverColor,
        descriptionText,
        descriptionStyle
      }}>
        <MouseUp listener={createClickA(href)} />
      </DimItem>
    )
  }

  Buttons() {
    const { base, sub } = this.props.colors
    return this.props.views.map((view, index) =>
      <Button key={index} {...{
        width: 100,
        borderBottomColor: base,
        inform: this.state.informs[index],
        svg: jsx(view.Button, {
          choised: index === this.state.index,
          mainColor: base,
          subColor: sub
        })
      }}>
        <MouseDown listener={this.listeners['DOM:VIEW_SWITCH']} data-index={index} />
      </Button>
    )
  }
}

const a = Atra({
  'ROOT': {
    style: {
      maxWidth: 960,
      margin: 'auto',
      padding: '0px 12px'
    }
  },
  'HEAD': {
    style: {
      height: HEAD_HEIGHT,
      textAlign: 'center'
    }
  },
  'HEAD:WORD': {
    style: {
      fontSize: '1.2em',
      fontWeight: 'bold',
      letterSpacing: 2,
      display: 'inline-block',
      position: 'relative',
      top: '35%'
    }
  },
  'MAIN': {
    style: {
      position: 'relative',
      borderStyle: 'solid'
    }
  },
  'MIDDLE_WRAP:BOTH': {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%',
      overflow: 'hidden'
    }
  },
  'MIDDLE_WRAP:EXHIBIT': {
    id: EXHIBIT_SCROLL_ID,
    style: {
      overflowY: 'scroll',
      height: '100%'
    }
  },
  'MIDDLE_WRAP:DETAIL': {
    id: DETAIL_SCROLL_ID
  },
  'BUTTONS': {
    style: {
      height: BUTTON_HEIGHT,
      textAlign: 'center',
      overflowY: 'hidden'
    }
  },
  'POPDOWN_SHUT': {
    mountWithShut: true,
    background: 'rgba(17, 17, 17, 0.98)',
    touchRatio: 0,
    notScroll: true
  },
  DIM_WRAP: {
    style: {
      overflowX: 'scroll',
      height: '100%',
      paddingBottom: 17
    }
  }
})