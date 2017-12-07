// @flow
import { isString, isArray, isObjectPure, typerror } from './util.js'

export default ({ exhibitBg }) => {
  const result = {
    exhibitBgURL: undefined,
    exhibitBgStyle: {}
  }

  if (exhibitBg) {
    if (isString(exhibitBg)) {
      const url = exhibitBg

      result.exhibitBgURL = url
      result.exhibitBgStyle.backgroundImage = `url(${url})`
    } else if (isArray(exhibitBg)) {
      const [url, style] = exhibitBg

      if (!isString(url)) {
        typerror(``)
      }
      if (!isObjectPure(style)) {
        typerror(``)
      }

      result.exhibitBgURL = url
      Object.entries(style).forEach(([key, value]) => {
        result.exhibitBgStyle[key] = value
      })
      result.exhibitBgStyle.backgroundImage = `url(${url})`
    } else {
      typerror(``)
    }
  }

  return result
}
