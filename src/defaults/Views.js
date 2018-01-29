// @flow
import { isArr, isStr, isFnc, typerror, error } from '../util.js'

export default ({ views }) => {

  const result = { views: [], creates: [] }

  if (views) {
    if (!isArr(views)) {
      typerror(`props.views must be "array"`)
    }

    if(views.length > 7) {
      error('props.views max length => 7')
    }

    views.forEach(({ head, Button, create }) => {
      if (head && !isStr(head)) {
        typerror(`props.view.head must be "string"`)
      }
      if (!isFnc(Button)) {
        typerror(`props.view.Button required as component function`)
      }
      if (!create) {
        error(`view.create is required`)
      }
      if (!isFnc(create)) {
        typerror(`view.create must be "function" but ${typeof create}`)
      }

      result.views.push({ head, Button })
      result.creates.push(create)
    })
  }

  return result
}
