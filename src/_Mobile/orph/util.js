// @flow
export const scrollDOM = () => document.getElementById('exhibitScrollElement')

export const isNumber = target => typeof target === 'number'

export const isPureObject = target =>
  typeof target === 'object' && !Array.isArray(target)
