// @flow
import { isArr, isStr, isObj, typerror } from '../util.js'

export default ({ sides }) => {
  const result = []

  if (sides) {
    if (!isArr(sides)) {
      typerror(``)
    }

    sides.forEach(({ href, buttonImage, coverColor, description }) => {
      const side = {
        href: undefined,
        buttonImage: undefined,
        coverColor: undefined,
        descriptionText: undefined,
        descriptionStyle: {}
      }

      if (href) {
        if (!isStr(href)) {
          typerror(``)
        }
        side.href = href
      }

      if (buttonImage) {
        if (!isStr(buttonImage)) {
          typerror(``)
        }
        side.buttonImage = `url(${buttonImage})`
      }

      if (coverColor) {
        if (!isStr(coverColor)) {
          typerror(``)
        }
        side.coverColor = coverColor
      }

      if (description) {
        if (isStr(description)) {
          side.descriptionText = description
        } else if (isArr(description)) {
          const [text, style] = description
          if (!isStr(text)) {
            typerror(``)
          }
          if (!isObj(style)) {
            typerror(``)
          }

          side.descriptionText = text
          side.descriptionStyle = style
        } else {
          typerror(``)
        }
      }

      result.push(side)
    })
  }

  return result
}
