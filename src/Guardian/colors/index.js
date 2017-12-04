import { isObjectPure, isString, error, typerror } from '../util.js'

const { keys, values } = Object
const colorsKey = ['base', 'sub', 'side']
const BASE_COLOR = '#181823'
const SUB_COLOR = '#ffffff'
const SIDE_COLOR = '#1f1c1c'

export default ({ colors }) => {
  const result = {
    baseColor: BASE_COLOR,
    subColor: SUB_COLOR,
    sideColor: SIDE_COLOR
  }

  if (colors) {
    if (!isObjectPure(colors)) {
      typerror(`props.colors must be "pure object"`)
    }
    if (!keys(colors).every(key => colorsKey.includes(key))) {
      error(`props.colors contain invalied key`)
    }
    if (!values(colors).every(value => isString(value))) {
      typerror(`props.colors contain invalied value`)
    }

    result.baseColor = colors.base || BASE_COLOR
    result.subColor = colors.sub || SUB_COLOR
    result.sideColor = colors.side || SIDE_COLOR
  }

  return result
}
