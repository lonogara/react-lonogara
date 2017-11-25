import {
  isArray,
  isString,
  isObjectPure,
  isFunction,
  typerror,
  error
} from '../util.js'

export default ({ views }) => {
  const result = []

  if (views) {
    if (!isArray(views)) {
      typerror(``)
    }

    views.forEach(({ head, Button, factory }) => {
      if (!isString(head)) {
        typerror(``)
      }
      if (!isObjectPure(Button) && !isFunction(Button)) {
        typerror(``)
      }
      if (!factory) {
        error(`view.factory is required`)
      }
      if (!isFunction(factory)) {
        typerror(`view factory must be "function" but ${typeof factory}`)
      }

      result.push({ head, Button, factory })
    })
  }

  return result
}
