// @flow
export const exhibitScrollDOM = () => document.getElementById('exhibitScrollElement')
export const sideScrollDOM = () => document.getElementById('sideScrollElement')
export const isNum = target => typeof target === 'number'
export const isFn = target => typeof target === 'function'
export const isPureObject = target => typeof target === 'object' && !Array.isArray(target)
