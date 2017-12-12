// @flow
import { isArray, isString, isObjectPure, typerror } from './util.js'

export default ({ sides }) => {
  const result = []

  if (sides) {
    if (!isArray(sides)) {
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
        if (!isString(href)) {
          typerror(``)
        }
        side.href = href
      }

      if (buttonImage) {
        if (!isString(buttonImage)) {
          typerror(``)
        }
        side.buttonImage = `url(${buttonImage})`
      }

      if (coverColor) {
        if (!isString(coverColor)) {
          typerror(``)
        }
        side.coverColor = coverColor
      }

      if (description) {
        if (isString(description)) {
          side.descriptionText = description
        } else if (isArray(description)) {
          const [text, style] = description
          if (!isString(text)) {
            typerror(``)
          }
          if (!isObjectPure(style)) {
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
