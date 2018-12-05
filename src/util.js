// @flow
import React from 'react'

export const EXHIBIT_SCROLL_ID = 'exhibitScrollElement'
export const DETAIL_SCROLL_ID = 'detailScrollParent'
export const MOBILE_SIDE_SCROLL_ID = 'sideScrollElement'
export const getElementById = (id) => document.getElementById(id)
export const extractDetailScrollElement = (el) => el.children[0].children[0].children[0]

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
export const createBlobURL = (blob) => window.URL.createObjectURL(blob)
export const revokeBlobURL = (blob) => window.URL.revokeObjectURL(blob)
export const lag = (time=0) => new Promise(resolve => setTimeout(resolve, time))

export const jsx = (Component, props) => isFnc(Component) && <Component {...props} />

export const createClickA = (href) =>
  () => href && setTimeout(() => {
    const a = document.createElement('a')
    a.href = href
    a.target = href.includes('tel') ? '' : '_blank'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }, 50)