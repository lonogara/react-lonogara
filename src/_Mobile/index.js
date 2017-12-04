// @flow
import React, { Component } from 'react'
import Atra from 'atra'
import orph from './orph'
import {
  Button,
  Detail,
  Exhibit,
  Head,
  Main,
  Preload,
  Side,
  Veil
} from './components'

const valued = target => (typeof target === 'function' ? target() : target)

const SIDE_WIDTH = 370
const HEAD_HEIGHT = 170
const BUTTON_HEIGHT = 150

const listeners = [
  'RENDER:OFF_PRELOADING',
  'DOM:SWITCH_VIEW',
  'DOM:OFF_DETAIL',
  'RENDER:ON_DRIFTING',
  'RENDER:LAG_DRIFTING',
  'DOM:OFF_DRIFTING'
]

export default class LigureMobile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      preloading: true,
      drifting: false,
      index: undefined,
      exhibit: undefined,
      detail: undefined,
      buttonUnitIndex: 0
    }
  }

  componentWillMount() {
    orph.attach(this)
    this.listeners = {}
    listeners.forEach(NAME => { this.listeners[NAME] = orph.create(NAME) })

    this.sides = this.createSides()
    this.preloader = valued(this.props.Preloader)
  }

  render() {
    return <div>
      {typeof this.state.index === 'number' && this.tree()}
      {this.state.preloading && this.createPreload()}
    </div>
  }

  componentDidMount() { orph.dispatch('REACT:DID_MOUNT') }

  tree() {
    const veil = this.createVeil()

    const { drifting } = this.state
    const transform = (!drifting || drifting === "lag") ? `translateX(0px)` : `translateX(${-SIDE_WIDTH}px)`
    const transition = (!drifting || drifting === "lag") ? "0.6s" : "0.72s"

    return (
      <div {...a('ROOT')}>
        <div {...a('HEAD_AND_MAIN', { style: { transform } })}>
          {this.createHead()}
          {this.createMain()}
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

  componentDidUpdate() {
    if (this.preloader && !this.state.preloading) {
      this.preloader = null
    }
  }

  /*----------------------- create -----------------------*/

  createPreload() {
    return <Preload {...{
      vanish: typeof this.state.index === 'number',
      onTransitionEnd: this.listeners['RENDER:OFF_PRELOADING'],
      children: this.preloader
    }} />
  }

  createHead() {
    return <Head {...{
      height: HEAD_HEIGHT,
      word: this.props.views[this.state.index].head,
      onTouchEnd: this.listeners['RENDER:ON_DRIFTING']
    }} />
  }

  createMain() {

    const { exhibit, detail } = this.state

    return (
      <Main {...{
        height: window.innerHeight - (HEAD_HEIGHT + BUTTON_HEIGHT),
        backgroundStyle: this.props.exhibitBgStyle
      }}>
      
        <Exhibit {...{ detail, children: exhibit }} />

        {detail && <Detail {...{
          onQuit: this.listeners['DOM:OFF_DETAIL'],
          mountWithShut: detail.mountWithShut,
          children: detail.elements
        }} />}

      </Main>
    )
  }

  createButtons() {
    return this.props.views.map((view, index) => (
      <Button {...{
        key: index,
        buttonIndex: index,
        onTouchStart: this.listeners['DOM:SWITCH_VIEW'],
        inform: 0,
        children: view.Button({ choised: index === this.state.index })
      }} />
    ))
  }

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

  createVeil() {
    return <Veil {...{
      drifting: this.state.drifting,
      onTouchEnd: this.listeners['RENDER:LAG_DRIFTING'],
      onTransitionEnd: this.listeners['DOM:OFF_DRIFTING']
    }} />
  }
}

const a = Atra({

  ROOT: {
    style: {
      backgroundColor: 'var(--side-color)'
    }
  },

  HEAD_AND_MAIN: {
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
    style: {
      position: 'fixed',
      top: 0,
      left: window.innerWidth,
      bottom: BUTTON_HEIGHT,
      width: SIDE_WIDTH,
      fontSize: 34,
      color: '#fff',
      overflowScrolling: 'touch',
      overflowY: 'scroll'
    }
  }
})