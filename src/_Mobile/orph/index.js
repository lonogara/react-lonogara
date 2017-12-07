import Orph from 'orph'
import * as STORE from './STORE.js'
import * as RENDER from './RENDER.js'
import { WINDOW, REACT, DOM, PASS } from './INTERFACE.js'

const orph = new Orph()

add(STORE, 'STORE')
add(RENDER, 'RENDER')
add(WINDOW, 'WINDOW')
add(REACT, 'REACT')
add(DOM, 'DOM')
add(PASS, 'PASS')

export default orph

function add(_import, prefix) {
  Object.entries(_import)
    .filter(([name]) => name !== 'default')
    .forEach(([name, value]) => {
      const addedName = `${prefix}:${name}`

      let listener, states, dispatches

      if (Array.isArray(value)) {
        const [opts, fn] = value
        states = opts.states || []
        dispatches = opts.dispatches || []
        listener = fn
      } else {
        states = []
        dispatches = []
        listener = value
      }

      orph.add(addedName, listener, { states, dispatches })
    })
}
