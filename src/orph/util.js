// @flow

export const isNum = target => typeof target === 'number'

export const isFn = target => typeof target === 'function'

export const isPureObject = target => typeof target === 'object' && !Array.isArray(target)

export const add = (orph, imports, prefix) =>
  Object.entries(imports)
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