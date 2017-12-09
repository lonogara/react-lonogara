// @flow
import React, { Component } from 'react'
import Atra from 'atra'
import orph from './orph'
import { winnerWidth, winnerHeight, windowOnListener } from './util.js'
import {
  Button,
  Head,
  Middle,
  Popdown,
  Preload,
  Side,
  Veil
} from './components'

const SIDE_WIDTH = 370
const HEAD_HEIGHT = 190
const BUTTON_HEIGHT = 150

const listeners = [
  'WINDOW:RESIZE_FORCE_UPDATE',
  'RENDER:PRELOADING_OFF',
  'DOM:VIEW_SWITCH',
  'DOM:DETAIL_OFF',
  'RENDER:DRIFTING_ON',
  'RENDER:DRIFTING_LAG',
  'RENDER:DRIFTING_OFF',
  'RENDER:POPDOWN_OFF'
]

const jsx = (Component, props) => typeof Component === "function" && <Component {...props} />

export default class LigureMobile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      preloading: true,
      drifting: false,
      index: null,
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
    this.sides = this.createSides()
  }

  render() {
    return <div>
      {typeof this.state.index === 'number' && this.tree()}
      {this.state.popdown.src && this.createPopdown()}
      {this.state.preloading && this.createPreload()}
    </div>
  }

  componentDidMount() {
    windowOnListener("resize", this.listeners['WINDOW:RESIZE_FORCE_UPDATE'])
    orph.dispatch('REACT:DID_MOUNT')
  }

  tree() {
    const { drifting } = this.state
    const transform = (!drifting || drifting === 'lag') ? `translateX(0px)` : `translateX(${-SIDE_WIDTH}px)`
    const transition = (!drifting || drifting === 'lag') ? '0.6s' : '0.72s'
    const veil = this.createVeil()

    return (
      <div {...a('ROOT')}>
        <div {...a('HEAD_AND_MIDDLE', { style: { transform } })}>
          {this.createHead()}
          {this.createMiddle()}
          {veil}
        </div>
        <nav {...a('BUTTONS')}>
          {this.createButtons()}
          {veil}
        </nav>
        <aside {...a('SIDES', { style: { transform, transition } })}>
          {this.sides}
        </aside>
      </div>
    )
  }

  /*----------------------- create -----------------------*/

  createSides() {
    return this.props.sides.map(
      ({ href, buttonImage, coverColor, descriptionText, descriptionStyle }, index) =>
        <Side {...{
          key: index,
          size: SIDE_WIDTH / 1.7,
          href,
          buttonImage,
          coverColor,
          descriptionText,
          descriptionStyle
        }} />
    )
  }

  createPopdown() {
    return <Popdown {...{
      src: this.state.popdown.src,
      vertically: this.state.popdown.vertically,
      onQuit: this.listeners['RENDER:POPDOWN_OFF']
    }} />
  }

  createPreload() {
    return <Preload {...{
      vanish: typeof this.state.index === 'number',
      onTransitionEnd: this.listeners['RENDER:PRELOADING_OFF'],
      children: jsx(this.props.Preloader)
    }} />
  }

  createVeil() {
    return <Veil {...{
      drifting: this.state.drifting,
      onTouchEnd: this.listeners['RENDER:DRIFTING_LAG'],
      onTransitionEnd: this.listeners['RENDER:DRIFTING_OFF']
    }} />
  }

  createHead() {
    return <Head {...{
      height: HEAD_HEIGHT,
      word: this.props.views[this.state.index].head,
      onTouchEnd: this.listeners['RENDER:DRIFTING_ON']
    }} />
  }

  createMiddle() {
    const { exhibitBgStyle } = this.props
    const height = winnerHeight() - (HEAD_HEIGHT + BUTTON_HEIGHT)
    const rootStyle = Object.assign({}, exhibitBgStyle, { height })
    const withBgImg = Boolean(exhibitBgStyle.backgroundImage)

    const { exhibit, detail } = this.state

    return <Middle {...{
      rootStyle,
      withBgImg,
      exhibit: jsx(exhibit.Component),
      detail: detail.Component && jsx(detail.Component, detail.props),
      mountWithShut: detail.mountWithShut,
      onQuit: this.listeners['DOM:DETAIL_OFF']
    }} />
  }

  createButtons() {
    return this.props.views.map((view, index, views) =>
      <Button {...{
        key: index,
        width: (winnerWidth() / views.length) - 0.5,
        buttonIndex: index,
        onTouchStart: this.listeners['DOM:VIEW_SWITCH'],
        inform: this.state.informs[index],
        children: jsx(view.Button, { choised: index === this.state.index })
      }} />
    )
  }
}

const a = Atra({

  ROOT: {
    style: {
      backgroundColor: 'var(--side-color)'
    }
  },

  HEAD_AND_MIDDLE: {
    style: {
      transition: '0.6s'
    }
  },

  BUTTONS: {
    style: {
      height: BUTTON_HEIGHT,
      fontSize: '2.4vh',
      background: '#fff',
      position: 'relative',
      margin: 'auto',
      textAlign: 'center'
    }
  },

  SIDES: {
    id: 'sideScrollElement',
    style: {
      position: 'fixed',
      top: 0,
      left: winnerWidth(),
      bottom: BUTTON_HEIGHT,
      width: SIDE_WIDTH,
      fontSize: 34,
      color: '#fff',
      overflowScrolling: 'touch',
      WebkitOverflowScrolling:'touch',
      overflowY: 'scroll'
    }
  }
})