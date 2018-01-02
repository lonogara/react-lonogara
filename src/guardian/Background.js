// @flow
import { isStr, isArr, isObj, typerror } from '../util.js'

export default ({ background }) => {
  const result = {
    backgroundURL: undefined,
    backgroundStyle: {}
  }

  if (background) {
    if (isStr(background)) {
      const url = background

      result.backgroundURL = url
    } else if (isArr(background)) {
      const [url, style] = background

      if (!isStr(url)) {
        typerror(``)
      }
      if (!isObj(style)) {
        typerror(``)
      }

      result.backgroundURL = url
      Object.entries(style).forEach(([key, value]) => {
        result.backgroundStyle[key] = value
      })
    } else {
      typerror(``)
    }
  }

  return result
}
