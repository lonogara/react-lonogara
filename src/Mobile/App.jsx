// @flow
import React, { Component, Fragment } from 'react'
import Atra from 'atra'
import {
  EXHIBIT_SCROLL_ID,
  DETAIL_SCROLL_ID,
  MOBILE_SIDE_SCROLL_ID,
  jsx,
  isNum,
  isObj,
  createClickA,
  winnerWidth,
  winnerHeight,
  windowOn,
} from '../util.js'
import {
  ShutFromLeft,
  ShutFromTop,
  Center,
  Button,
  Head,
  Preload,
  SideItem,
  Veil,
  QuitDetail,
  QuitPopdown
} from './Layouts.jsx'
import {
  Listen,
  Background,
  ArrowLeft,
  ArrowWideUp,
  Popdown,
  Burger
} from './Soles.jsx'

const HEAD_HEIGHT = 190
const BUTTON_HEIGHT = 160
const SIDE_WIDTH = 370
const TouchStartCapture = (props) => <Listen {...Object.assign({ type: 'onTouchStartCapture' }, props)} />
const TouchEnd = (props) => <Listen {...Object.assign({ type: 'onTouchEnd' }, props)} />
const TouchEndCapture = (props) => <Listen {...Object.assign({ type: 'onTouchEndCapture' }, props)} />

type Props = {
  firstIndex: number,
  backgroundStyle: { [key: string]: string },
  Preloader: React$Component,
  sides: Array<>,
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
    src?: string,
    vertically?: boolean
  },
  drifting: boolean,
  informs: [number, number, number, number]
}

export default class LonogaraMobile extends Component {
  // this.listeners: { [name: string]: () => {} }
  // sides: React$Node

  constructor(props) {
    super(props)

    props.orph.attach(this)
    this.listeners = props.orph.order([
      'RENDER:PRELOADING_OFF',
      'DOM:VIEW_SWITCH',
      'DOM:DETAIL_OFF',
      'RENDER:DRIFTING_ON',
      'RENDER:DRIFTING_LAG',
      'RENDER:DRIFTING_OFF',
      'RENDER:POPDOWN_OFF'
    ])

    this.noButtons = props.views.length < 2
    this.sides = this.Sides()
    this.detailQuit = this.DetailQuit()
    this.popdownQuit = this.PopdownQuit()
  }

  isReady() {
    return Boolean(this.props.views) && Boolean(this.props.backgroundStyle)
  }

  render() {
    const isReady = this.isReady()
    return <Fragment>
      {isReady && this.Tree()}
      {this.state.popdown.src && this.Popdown()}
      {this.state.preloading && this.Preload(isReady ? 0 : 1)}
    </Fragment>
  }

  componentDidMount() {
    this.props.orph.dispatch('REACT:DID_MOUNT')
  }

  Tree() {
    const { drifting } = this.state
    const { noButtons } = this
    const transform = (!drifting || drifting === 'lag') ? `translateX(0px)` : `translateX(${-SIDE_WIDTH}px)`
    const transition = (!drifting || drifting === 'lag') ? '0.6s' : '0.72s'
    const height = winnerHeight() - (noButtons ? 0 : BUTTON_HEIGHT)
    const veil = this.Veil()
    return (
      <div {...{ style: { backgroundColor: this.props.colors.side } }}>
        <aside {...a('SIDES', { style: { transform, transition, height } })}>
          {this.sides}
        </aside>
        <div {...a('HEAD_AND_MIDDLE', { style: { transform } })}>
          {this.Head()}
          {this.Middle()}
          {veil}
        </div>
        {!noButtons && <nav {...a('BUTTONS')}>
          {this.Buttons()}
          {veil}
        </nav>}
      </div>
    )
  }

  Sides() {
    return this.props.sides.map(({ href, buttonImage, coverColor, descriptionText, descriptionStyle }, index) =>
      <SideItem key={index} {...{
        size: SIDE_WIDTH / 1.7,
        buttonImage,
        coverColor,
        descriptionText,
        descriptionStyle
      }}>
        <TouchEnd listener={createClickA(href)} />
      </SideItem>
    )
  }

  DetailQuit() {
    return ({ fn }) =>
      <QuitDetail>
        <ArrowLeft stroke={this.props.colors.detailQuit} />
        <TouchEndCapture
          positionValue={-20}
          listener={(e) => {
            e.stopPropagation()
            e.preventDefault()
            fn()
          }}
        />
      </QuitDetail>
  }

  PopdownQuit() {
    return ({ fn }) =>
      <QuitPopdown>
        <ArrowWideUp />
        <TouchEnd
          onTouchStartCapture={(e) => e.stopPropagation()}
          positionValue={-10}
          listener={(e) => { e.stopPropagation(); fn()}}
        />
      </QuitPopdown>
  }

  Preload(opacity) {
    return (
      <Preload {...{
        opacity,
        onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
        backgroundColor: this.props.colors.preloader
      }}>
        <Center {...{ top: -100 }}>
          {jsx(this.props.Preloader)}
        </Center>
      </Preload>
    )
  }

  Popdown() {
    const Quit = this.popdownQuit
    const onQuitEnd = this.listeners['RENDER:POPDOWN_OFF']
    const { src, vertically } = this.state.popdown
    const top = vertically && "4%"
    return (
      <ShutFromTop {...a('POPDOWN_SHUT', { Quit, onQuitEnd })}>
        <Popdown {...{ src, top }} />
      </ShutFromTop>
    )
  }

  Veil() {
    return (
      <Veil {...{
        onTransitionEnd: this.listeners['RENDER:DRIFTING_OFF'],
        drifting: this.state.drifting
      }}>
        <TouchEnd listener={this.listeners['RENDER:DRIFTING_LAG']} />
      </Veil>
    )
  }

  Head() {
    const { base, sub } = this.props.colors
    return (
      <Head {...{
        height: HEAD_HEIGHT,
        word: this.props.views[this.state.index].head,
        backgroundColor: base,
        color: sub
      }}>
        <Burger stroke={sub} />
        <TouchEnd listener={this.listeners['RENDER:DRIFTING_ON']} />
      </Head>
    )
  }

  Middle() {
    const height = winnerHeight() - HEAD_HEIGHT - (this.noButtons ? 0 : BUTTON_HEIGHT)
    const backgroundStyle = this.props.backgroundStyle
    const backgroundColor = this.props.colors.background
    const isDetail = isObj(this.state.detail.props)
    return (
      <div {...a('MIDDLE', { style: { height } })}>
        <Background {...{ style: backgroundStyle }} />
        <Background {...{ style: { backgroundColor } }} />
        <div {...a('MIDDLE_WRAP:BOTH')}>
          <div {...a('MIDDLE_WRAP:EXHIBIT', { style: { overflowY: isDetail ? 'hidden' : 'scroll' } })}>
            {jsx(this.props.views[this.state.index].Exhibit)}
          </div>
          <div {...a('MIDDLE_WRAP:DETAIL')}>
            {isDetail && this.Detail()}
          </div>
        </div>
      </div>
    )
  }

  Detail() {
    return (
      <ShutFromLeft {...{
        mountWithShut: this.state.detail.mountWithShut,
        duration: 0.55,
        background: this.props.colors.detail,
        notScroll: Boolean(this.state.popdown.src),
        Quit: this.detailQuit,
        onQuitEnd: this.listeners['DOM:DETAIL_OFF']
      }}>
        {jsx(
          this.props.views[this.state.index].Detail,
          this.state.detail.props
        )}
      </ShutFromLeft>
    )
  }

  Buttons() {
    return this.props.views.map((view, index, views) =>
      <Button key={index} {...{
        width: (winnerWidth() / views.length) - 0.5,
        inform: this.state.informs[index],
        svg: jsx(view.Button, {
          choised: index === this.state.index,
          mainColor: this.props.colors.base,
          subColor: this.props.colors.sub
        })
      }}>
        <TouchStartCapture
          data-index={index}
          listener={(e) => {
            e.stopPropagation()
            this.listeners['DOM:VIEW_SWITCH'](e)
          }}
        />
      </Button>
    )
  }
}

const a = Atra({
  'HEAD_AND_MIDDLE': {
    style: {
      transition: '0.6s'
    }
  },
  'MIDDLE': {
    style: {
      position: 'relative'
    }
  },
  'MIDDLE_WRAP:BOTH': {
    style: {
      outline: 'none',
      position: 'relative',
      height: '100%'
    }
  },
  'MIDDLE_WRAP:EXHIBIT': {
    id: EXHIBIT_SCROLL_ID,
    style: {
      position:"relative",
      height: "100%",
      overflowScrolling:"touch",
      WebkitOverflowScrolling:"touch",
      overflowX: "hidden"
    }
  },
  'MIDDLE_WRAP:DETAIL': {
    id: DETAIL_SCROLL_ID
  },
  'POPDOWN_SHUT': {
    mountWithShut: true,
    background: 'rgba(17, 17, 17, 0.98)',
    touchRatio: 0,
    notScroll: true,
    duration: 0.5
  },
  'BUTTONS': {
    style: {
      height: BUTTON_HEIGHT,
      fontSize: '2.4vh',
      background: '#fff',
      position: 'relative',
      margin: 'auto',
      textAlign: 'center'
    }
  },
  'SIDES': {
    id: MOBILE_SIDE_SCROLL_ID,
    style: {
      position: 'fixed',
      top: 0,
      left: winnerWidth(),
      width: SIDE_WIDTH,
      fontSize: 34,
      color: '#fff',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling:'touch',
      overflowY: 'scroll'
    }
  }
})