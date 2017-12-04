import Orph from 'orph'
// import * as _util from './util'
import * as _render from './render'
import * as _store from './store'
import * as _react from './react'
import * as _dom from './dom'
import * as _window from './window'

const { entries } = Object
const { isArray } = Array
const isPureObject = target => typeof target === 'object' && !isArray(target)

const imports = [
  // ['UTIL', _util],
  ['RENDER', _render],
  ['STORE', _store],
  ['REACT', _react],
  ['DOM', _dom],
  ['WINDOW', _window]
]

const orph = new Orph(
  [].concat(
    ...imports.map(([prefix, orphans]) =>
      entries(orphans)
        .filter(([name, listener]) => !isPureObject(listener))
        .map(([name, listener]) => {
          const NAME = `${prefix}:${name}`
          return isArray(listener) ? [NAME, ...listener] : [NAME, listener]
        })
    )
  )
)

export default orph
