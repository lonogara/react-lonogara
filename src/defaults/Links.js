// @flow
import { isArr, isStr, isObj, typerror } from '../util.js'

export default ({ links }) => {
  const result = []

  if (links) {
    if (!isArr(links)) {
      typerror(`props.links must be "array"`)
    }

    links.forEach(({ href, buttonImage, coverColor, description }) => {
      const side = {
        href: undefined,
        buttonImage: undefined,
        coverColor: undefined,
        descriptionText: undefined,
        descriptionStyle: {}
      }

      if (href) {
        if (!isStr(href)) {
          typerror(`props.link.href must be "string"`)
        }
        side.href = href
      }

      if (buttonImage) {
        if (!isStr(buttonImage)) {
          typerror(`props.link.buttonImage must be "string"`)
        }
        side.buttonImage = `url(${buttonImage})`
      }

      if (coverColor) {
        if (!isStr(coverColor)) {
          typerror(`props.link.coverColor must be "string"`)
        }
        side.coverColor = coverColor
      }

      if (description) {
        if (isStr(description)) {
          side.descriptionText = description
        } else if (isArr(description)) {
          const [text, style] = description
          if (!isStr(text)) {
            typerror(`props.link.description must be "string"`)
          }
          if (!isObj(style)) {
            typerror(`props.link.description style must be "object"`)
          }

          side.descriptionText = text
          side.descriptionStyle = style
        } else {
          typerror(`props.link.description is invalid`)
        }
      }

      result.push(side)
    })
  }

  return result
}
