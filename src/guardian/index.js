// @flow
import React, { Component } from 'react'
import background from './Background.js'
import sides from './Sides.js'
import views from './Views.js'
import {
  isObj,
  isStr,
  isNum,
  isFnc,
  typerror,
  createBlobURL,
  raf
} from '../util.js'

const firstIndex = ({ firstIndex }) => (isNum(firstIndex) ? firstIndex : 0)
const preloader = ({ Preloader }) => isFnc(Preloader) && Preloader

export default () => ({ firstIndex, background, preloader, sides, views })

export const HoColors = (Colors) => ({ colors }) => {
  const result = Colors()

  if (colors) {
    if (!isObj(colors)) {
      typerror(`props.colors must be "pure object"`)
    }
    if (!Object.values(colors).every(value => isStr(value))) {
      typerror(`props.colors contain invalied value`)
    }

    Object.keys(result).forEach((key) => {
      result[key] = colors[key] || result[key]
    })
  }

  return result
}

export const createGuardian = ({ App, guardian }) =>
  class Guardian extends Component {
    constructor(props) {

      super(props)

      this.results = {}
      this.results.firstIndex = guardian.firstIndex(props)
      this.results.colors = guardian.colors(props)
      this.results.Preloader = guardian.preloader(props)
      this.results.sides = guardian.sides(props)
      this.results.views = guardian.views(props)

      const { backgroundURL, backgroundStyle } = guardian.background(props)
      const fetchTarget = (backgroundURL && !backgroundURL.includes('http')) ? backgroundURL : undefined
      
      this.state = { fetchTarget }
      this.results.backgroundStyle = backgroundStyle

      if(!fetchTarget && backgroundURL) {
        this.results.backgroundStyle.backgroundImage = `url(${backgroundURL})`
      }
    }

    render() {
      const {
        firstIndex,
        colors,
        Preloader,
        sides,
        views,
        backgroundStyle
      } = this.results

      return (
        <div>

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

          <App {...{
            backgroundStyle: !this.state.fetchTarget && backgroundStyle,
            firstIndex,
            colors,
            Preloader,
            sides,
            views
          }} />

        </div>
      )
    }

    componentDidMount() {
      const { fetchTarget } = this.state

      if(fetchTarget){
        fetch(fetchTarget)
        .then((res) => res.ok && res.blob())
        .then((blob) => blob && createBlobURL(blob))
        .then((url) => {
          if(url) {
            this.results.backgroundStyle.backgroundImage = `url(${url})`
          }
          raf(() => this.setState({ fetchTarget: undefined }))
        })
      }
    }

  }