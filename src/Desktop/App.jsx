// @flow
import React, { Component } from 'react'
import Atra from 'atra'
import orph from './orph.js'
import {
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
  Scroll,
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
  // ArrowUp,
  Strap
} from './Ends.jsx'

const HEAD_HEIGHT = 90
const BUTTON_HEIGHT = 110
const BOTTOM_MARGIN = 40
const MouseDown = (props) => <Listen {...Object.assign({ type: 'onMouseDown' }, props)} />
const MouseUp = (props) => <Listen {...Object.assign({ type: 'onMouseUp' }, props)} />
const listeners = [
  'WINDOW:RESIZE_FORCE_UPDATE',
  'RENDER:PRELOADING_OFF',
  'DOM:DETAIL_OFF',
  'DOM:VIEW_SWITCH',
  'DOM:DIM_SWITCH',
  'RENDER:POPDOWN_OFF'
]

export default class LonogaraDesktop extends Component {

  constructor(props) {
    super(props)
    this.state = {
      preloading: true,
      dimming: false,
      index: undefined,
      exhibit: {},
      detail: {},
      popdown: {},
      informs: [0, 0, 0, 0]
    }
  }

  componentWillMount() {
    orph.attach(this)
    this.listeners = {}
    listeners.forEach(NAME => { this.listeners[NAME] = orph.create(NAME) })

    this.noButtons = this.props.views.length < 2

    this.layout = this.Layout()
    this.detailQuit = this.DetailQuit()
    this.popdownQuit = this.PopdownQuit()
  }

  render() {
    return <div>
      {this.layout}
      {isNum(this.state.index) && this.Tree()}
      {this.state.popdown.src && this.Popdown()}
      {this.state.preloading && this.Preload()}
    </div>
  }

  componentDidMount() {
    windowOn("resize", this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
    orph.dispatch('REACT:DID_MOUNT')
  }

  Tree() {
    const { noButtons } = this
    const { base } = this.props.colors
    const { dimming } = this.state
    const mainHeight = winnerHeight() - HEAD_HEIGHT - (noButtons ? 80 : BUTTON_HEIGHT) - BOTTOM_MARGIN

    return(
      <div {...a('ROOT')}>
        <header {...a('HEAD', { style: { visibility: dimming && 'hidden' } })}>
          <span {...a('HEAD:WORD', { style: { color: base } })}>
            {this.props.views[this.state.index].head}
          </span>
        </header>
        <div {...a('MAIN', { style: { height: mainHeight, borderColor: base } })}>
          {this.Middle()}
          {this.DimSwitch()}
          {dimming && this.DimBoard()}
        </div>
        {!noButtons && <nav {...a('BUTTONS', { style: { visibility: dimming && 'hidden' } })}>
          {this.Buttons()}
        </nav>}
      </div>
    )
  }

  /*-----------------------  -----------------------*/

  Layout() {
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
        <Background {...{ style: this.props.backgroundStyle }} />
        <Background {...{ style: { backgroundColor: this.props.colors.background } }} />
      </div>
    )
  }

  DetailQuit() {
    return ({ fn }) =>
      <QuitDetail>
        <ArrowLeft stroke={this.props.colors.detailQuit} />
        <MouseDown positionValue={-20} listener={fn} />
      </QuitDetail>
  }

  PopdownQuit() {
    return ({ fn }) =>
      <QuitPopdown>
        <ArrowWideUp />
        <MouseDown positionValue={-10} listener={fn} />
      </QuitPopdown>
  }

  Preload() {
    const onTransitionEnd = this.listeners['RENDER:PRELOADING_OFF']
    const backgroundColor = this.props.colors.preloader
    const opacity = isNum(this.state.index) ? 0 : 1
    const deduct = 60
    const preloader = jsx(this.props.Preloader)

    return (
      <Preload {...{ onTransitionEnd, backgroundColor, opacity }}>
        <Center {...{ deduct }}>{preloader}</Center>
      </Preload>
    )
  }

  Popdown() {
    const Quit = this.popdownQuit
    const onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
    const { src } = this.state.popdown

    return (
      <ShutFromTop {...a('POPDOWN_SHUT', { Quit, onQuitEnd })}>
        <Popdown {...{ src }} />
      </ShutFromTop>
    )
  }

  Middle() {
    const exhibit = jsx(this.state.exhibit.Component)
    return (
      <div {...a('MIDDLE')}>
        <Scroll {...a('MIDDLE_WRAP:EXHIBIT')}>{exhibit}</Scroll>
        {this.state.detail.Component && this.Detail()}
      </div>
    )
  }

  Detail() {
    const background = this.props.colors.detail
    const Quit = this.detailQuit
    const onQuitEnd = this.listeners['DOM:DETAIL_OFF']
    const { Component, props, mountWithShut } = this.state.detail
    const detail = jsx(Component, props)

    return (
      <ShutFromLeft {...{
        hiddenBar: true,
        touchRatio: 0,
        background,
        Quit,
        onQuitEnd,
        mountWithShut
      }}>
        {detail}
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
      <DimBoard>
        <Scroll {...{ style: { overflowX: 'scroll' } }}>
          <Center {...{ deduct: 24 }}>
            <div {...{ style: this.props.sides.length < 5 ? { textAlign: 'center' } : { display: 'flex' } }}>
              {this.DimItems()}
            </div>
          </Center>
        </Scroll>
      </DimBoard>
    )
  }

  DimItems() {
    return this.props.sides.map(({ href, buttonImage, coverColor, descriptionText, descriptionStyle }, index) =>
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
  'MIDDLE': {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%',
      overflow: 'hidden'
    }
  },
  'MIDDLE_WRAP:EXHIBIT': {
    id:'exhibitScrollElement',
    style: {
      overflowY: 'scroll',
      height: '100%'
    }
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
  }
})

type Props = {
  firstIndex: number,
  backgroundStyle: { [key: string]: string },
  Preloader: React$Component,
  sides: Array<>,
  views: Array<>
}

type State = {
  preloading: boolean,
  dimming: boolean,
  index: null | number,
  exhibit: {
    Component?: React$Component
  },
  detail: {
    Component?: React$Component,
    data?: any
  },
  popdown: {
    src?: string,
    vertically?: boolean
  },
  informs: [number, number, number, number]
}