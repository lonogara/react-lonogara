// @flow
import { isArr } from '../util.js'

export const exhibitScrollDOM = () => document.getElementById('exhibitScrollElement')

export const add = (orph, prefix, imports) =>
  Object.entries(imports)
    .filter(([name]) => name !== 'default')
    .forEach(([name, value]) => {
      const addedName = `${prefix}:${name}`

      let listener, states, dispatches

      if (isArr(value)) {
        const [opts, fn] = value
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