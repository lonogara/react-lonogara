// @flow
export const isArray = Array.isArray
export const isObjectPure = target => typeof target === 'object' && !isArray(target)
export const isString = target => typeof target === 'string'
export const isNumber = target => typeof target === 'number'
export const isFunction = target => typeof target === 'function'
export const error = message => {
  throw new Error(message)
}
export const typerror = message => {
  throw new TypeError(message)
}
