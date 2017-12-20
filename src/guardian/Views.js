// @flow
import { isArr, isStr, isFnc, typerror, error } from '../util.js'

export default ({ views }) => {
  const result = []

  if (views) {
    if (!isArr(views)) {
      typerror(``)
    }

    if(views.length > 7) {
      error('')
    }

    views.forEach(({ head, Button, create }) => {
      if (head && !isStr(head)) {
        typerror(``)
      }
      if (!isFnc(Button)) {
        typerror(``)
      }
      if (!create) {
        error(`view.create is required`)
      }
      if (!isFnc(create)) {
        typerror(`view.create must be "function" but ${typeof create}`)
      }

      result.push({ head, Button, create })
    })
  }

  return result
}
