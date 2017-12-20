// @flow
import React from 'react'

export const isArr = Array.isArray
export const isObj = target => typeof target === 'object' && !isArr(target)
export const isStr = target => typeof target === 'string'
export const isNum = target => typeof target === 'number'
export const isFnc = target => typeof target === 'function'

export const error = message => { throw new Error(message) }
export const typerror = message => { throw new TypeError(message) }

export const winnerWidth = () => window.innerWidth
export const winnerHeight = () => window.innerHeight
export const raf = (callback) => window.requestAnimationFrame(callback)
export const caf = (callback) => window.cancelAnimationFrame(callback)
export const windowOn = (type, fn, opts) => window.addEventListener(type, fn, opts)
export const windowOff = (type, fn, opts) => window.removeEventListener(type, fn, opts)

export const jsx = (Component, props) => isFnc(Component) && <Component {...props} />

export const createClickA = (href) =>
  () => href && setTimeout(() => {
    const a = document.createElement('a')
    a.href = href
    a.target = href.includes('tel') ? '' : '_blank'
    a.click()
  }, 50)