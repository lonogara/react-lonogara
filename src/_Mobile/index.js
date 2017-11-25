// @flow
import React, { Component } from 'react'
import Atra from 'atra'
import orph from './orph'
import { Veil, Side, Preload, Main, Head, Button } from './components'

// const forcep = (value) => Promise.resolve(value)
// const firstCamel = (string) => `${string[0].toUpperCase()}${string.slice(1)}`
const valued = target => (typeof target === 'function' ? target() : target)

const SIDE_WIDTH = 370
const HEAD_HEIGHT = 170
const BUTTON_HEIGHT = 150

const listeners = [
  'DOM:OFF_PRELOADING',
  'DOM:SWITCH_VIEW',
  'DOM:UPDATE_VIEW',
  'DOM:ON_DETAIL',
  'DOM:OFF_DETAIL',
  'DOM:ON_DRIFTING',
  'DOM:OFF_DRIFTING'
]

export default class LigureMobile extends Component {
  // sides: Array<React$Element>
  // backgroundImage: string
  // css: string

  constructor(props) {
    super(props)
    this.state = {
      preloading: true,
      drifting: false,
      index: undefined,
      exhibit: undefined,
      detail: undefined
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
    return (
      <div>
        {typeof this.state.index === 'number' && this.tree()}
        {this.state.preloading && this.createPreload()}
      </div>
    )
  }

  componentDidMount() {
    orph.dispatch('REACT:DID_MOUNT')
  }

  tree() {
    const head = this.createHead()
    const main = this.createMain()
    const veil = this.createVeil()
    const buttons = this.createButtons()
    const sides = this.sides

    const { drifting } = this.state

    return (
      <div {...a('ROOT')}>
        <div {...a('HEAD_AND_MAIN', {
          style: {
            transform: `translateX(${drifting ? -SIDE_WIDTH : 0}px)`
          }
        })}>
          {head}
          {main}
          {veil}
        </div>
        <nav {...a('BUTTONS')}>
          {buttons}
          {veil}
        </nav>
        <aside {...a('SIDES', {
          style: {
            transform: `translateX(${drifting ? -SIDE_WIDTH : 0}px)`,
            transition: `${drifting ? 0.72 : 0.6}s`
          }
        })}>
          {sides}
        </aside>
      </div>
    )
  }

  componentDidUpdate() {
    if (this.preloader && !this.state.preloading) {
      this.preloader = null
    }

    orph.dispatch('REACT:DID_UPDATE')
  }

  /*----------------------- create -----------------------*/

  createPreload() {
    return <Preload {...{
      vanish: typeof this.state.index === 'number',
      onTransitionEnd: this.listeners['DOM:OFF_PRELOADING'],
      children: this.preloader
    }} />
  }

  createHead() {
    return <Head {...{
      height: HEAD_HEIGHT,
      word: this.props.views[this.state.index].head,
      onTouchEnd: this.listeners['DOM:ON_DRIFTING']
    }} />
  }

  createMain() {
    return <Main {...{
      height: window.innerHeight - (HEAD_HEIGHT + BUTTON_HEIGHT),
      backgroundStyle: this.props.exhibitBgStyle,
      exhibit: this.state.exhibit,
      detail: this.state.detail
    }} />
  }

  createVeil() {
    return <Veil {...{
      drifting: this.state.drifting,
      onTouchEnd: this.listeners['DOM:OFF_DRIFTING']
    }} />
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
}

const a = Atra({
  ROOT: {},

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
