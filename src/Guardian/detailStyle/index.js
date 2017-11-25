import { isObjectPure, isString, typerror } from '../util.js'

export default ({ detailStyle }) => {
  const result = {
    detailRootClassName: '',
    detailCssString: undefined
  }

  if (detailStyle) {
    if (!isObjectPure(detailStyle)) {
      typerror(``)
    }

    const { rootClassName, cssString } = detailStyle
    if (!isString(rootClassName)) {
      typerror(``)
    }
    if (!isString(cssString)) {
      typerror(``)
    }

    result.detailRootClassName = rootClassName
    result.detailCssString = cssString
  }

  return result
}
