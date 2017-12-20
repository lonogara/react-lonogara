// @flow
import React from 'react'
import background from './Background.js'
import sides from './Sides.js'
import views from './Views.js'
import {
  isObj,
  isStr,
  isNum,
  isFnc,
  typerror
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

export const Guardian = ({ App, guardian }) => props => {
  const firstIndex = guardian.firstIndex(props)
  const colors = guardian.colors(props)
  const { backgroundURL, backgroundStyle } = guardian.background(props)
  const Preloader = guardian.preloader(props)
  const sides = guardian.sides(props)
  const views = guardian.views(props)

  return (
    <div>
      {backgroundURL && <link rel="prefetch" href={backgroundURL} />}
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
        firstIndex,
        colors,
        backgroundStyle,
        Preloader,
        sides,
        views
      }} />
    </div>
  )
}