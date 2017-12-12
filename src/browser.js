// @flow
export const winnerWidth = () => window.innerWidth
export const winnerHeight = () => window.innerHeight
export const raf = (callback) => window.requestAnimationFrame(callback)
export const windowOnListener = (type, fn, opts) => window.addEventListener(type, fn, opts)
export const windowOffListener = (type, fn, opts) => window.removeEventListener(type, fn, opts)