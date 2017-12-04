import Orph from 'orph'
import * as _dom from './_dom.js'
import * as _react from './_react.js'
import * as _render from './_render.js'
import * as _store from './_store.js'
import * as _window from './_window.js'
import { isPureObject } from './util.js'

const orph = new Orph()
add(_dom, 'DOM')
add(_react, 'REACT')
add(_render, 'RENDER')
add(_store, 'STORE')
add(_window, 'WINDOW')
export default orph

function add(_import, prefix) {
  Object.entries(_import)
    .filter(([name, value]) => !isPureObject(value))
    .forEach(([name, value]) => {
      const addedName = `${prefix}:${name}`

      let listener, states, dispatches

      if (Array.isArray(value)) {
        const [fn, opts] = value
        listener = fn
        states = opts.states || []
        dispatches = opts.dispatches || []
      } else {
        listener = value
        states = []
        dispatches = []
      }

      orph.add(addedName, listener, { states, dispatches })
    })
}
