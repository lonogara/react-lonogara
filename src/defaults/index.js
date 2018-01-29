// @flow
import background from './Background.js'
import links from './Links.js'
import views from './Views.js'
import {
  isObj,
  isStr,
  isNum,
  isFnc,
  typerror
} from '../util.js'

export const HoColors = (Colors) => ({ colors }) => {
  const result = Colors()

  if (colors) {
    if (!isObj(colors)) {
      typerror(`props.colors must be "pure object"`)
    }
    if (!Object.values(colors).every(value => isStr(value) || !value)) {
      typerror(`props.colors contain invalied value`)
    }

    Object.keys(result).forEach((key) => {
      result[key] = colors[key] || result[key]
    })
  }

  return result
}

const firstIndex = ({ firstIndex, views }) => {
  if (firstIndex > views.length - 1) {
    throw new Error('props.firstIndex > views.length - 1')
  }

  return isNum(firstIndex) ? firstIndex : 0
}
const preloader = ({ Preloader }) => isFnc(Preloader) && Preloader

export const create = () => ({ firstIndex, background, preloader, links, views })