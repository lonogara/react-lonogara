// @flow
import React, { Component, Fragment } from 'react'
import { createBlobURL, raf } from './util.js'

const initials = [
  { key: 'exhibitScrollTop', value: 0 },
  { key: 'detailScrollTop', value: 0 },
  { key: 'detailProps', value: undefined }
]

export default ({ App, orph, defaults }) =>
  class Guardian extends Component {
    constructor(props) {
      super(props)
      this.state = { ready: false }
      this.asynces = []
      this.results = {}

      this.results.firstIndex = defaults.firstIndex(props)
      this.results.colors = defaults.colors(props)
      this.results.Preloader = defaults.preloader(props)
      this.results.sides = defaults.sides(props)

      const { backgroundURL, backgroundStyle } = defaults.background(props)

      this.results.backgroundStyle = backgroundStyle

      if (backgroundURL) {
        if (backgroundURL.includes('http')) {
          this.results.backgroundStyle.backgroundImage = `url(${backgroundURL})`
        } else {
          this.asynces.push(
            fetch(backgroundURL)
            .then((res) => res.ok && res.blob())
            .then((blob) => blob && createBlobURL(blob))
            .then((backgroundURL) => {
              if(backgroundURL) {
                this.results.backgroundStyle.backgroundImage = `url(${backgroundURL})`
              }
            })
          )
        }
      }

      const { views, creates } = defaults.views(props)

      this.results.views = views

      creates.forEach((create, index) =>
        this.asynces.push(
          orph.dispatch('STORE:INIT', { index, initials })
          .then(() =>
            create({
              renderDetail: data => orph.dispatch('PASSED:DETAIL_ON', data),
              setPopdown: src => orph.dispatch('PASSED:POPDOWN_ON', src),
              setInform: inform => orph.dispatch('PASSED:INFORM_ON', { index, inform })
            })
          )
          .then((components = {}) =>
            Object.keys(components).forEach(key => {
              this.results.views[index][key] = components[key]
            })
          )
        )
      )
    }

    render() {
      return <Fragment>
        <style type="text/css">{`
          body {
            margin: 0px;
            overflow: hidden;
            font-family: meiryo, Helvetica, Arial, "hiragino kaku gothic pro", "ms pgothic", sans-serif;
          }
          .lonogara_button svg {
            height: 100%;
          }
        `}</style>
        <App orph={orph} {...{
          firstIndex: this.results.firstIndex,
          colors: this.results.colors,
          Preloader: this.results.Preloader,
          sides: this.results.sides,
          backgroundStyle: this.state.ready && this.results.backgroundStyle,
          views: this.state.ready && this.results.views
        }} />
      </Fragment>
    }

    componentDidMount() {
      Promise.all(this.asynces).then(() => raf(() => this.setState({ ready: true })))
    }
  }