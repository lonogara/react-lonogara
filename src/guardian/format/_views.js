// @flow
import { isArray, isString, isFunction, typerror, error } from './util.js'

export default ({ views }) => {
  const result = []

  if (views) {
    if (!isArray(views)) {
      typerror(``)
    }

    if(views.length > 7) {
      error('')
    }

    views.forEach(({ head, Button, create }) => {
      if (!isString(head)) {
        typerror(``)
      }
      if (!isFunction(Button)) {
        typerror(``)
      }
      if (!create) {
        error(`view.create is required`)
      }
      if (!isFunction(create)) {
        typerror(`view.create must be "function" but ${typeof create}`)
      }

      result.push({ head, Button, create })
    })
  }

  return result
}
