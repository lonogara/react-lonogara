// @flow
import { exhibitScrollDOM } from './util.js'

export const PRELOADING_OFF = [
  { states: ['preloading'] },
  (n, { render }): void => render({ preloading: false })]

export const POPDOWN_ON = [
  { states: ['popdown'] },
  ({ src, vertically }, { render }): void => render({ popdown: { src, vertically } })]

export const POPDOWN_OFF = [
  { states: ['popdown'] },
  (n, { render }): void => render({ popdown: {} })]

export const DETAIL_ON = [
  { states: ['detail'] },
  ({ Component, data }, { render }): void =>
    render({
      detail: {
        Component,
        props: data,
        mountWithShut: true
      }
    })
]

export const DETAIL_OFF = [
  { states: ['detail'] },
  (n, { render }): void => render({ detail: {} })]

export const BY_REACT_DIDMOUNT = [
  { states: ['index', 'exhibit'] },
  ({ index, Component }, { render }): void =>
    render({
      index,
      exhibit: {
        Component
      }
    })
]

export const BY_DOM_VIEW_SWITCH = [
  { states: ['index', 'exhibit', 'detail'] },
  ({ index, exhibits, details }, { render }): void => {
    const exhibit = {
      Component: exhibits.Component
    }

    const detail = !details.data ? {} : {
      Component: details.Component,
      props: details.data,
      mountWithShut: false
    }

    render({ index, exhibit, detail }, () => {
      exhibitScrollDOM().scrollTop = exhibits.data
    })
  }
]

export const INFORM_CHANGE = [
  { states: ['informs'] },
  ({ index, inform }, { state, render }) => {
    const { informs } = state()
    informs[index] = inform
    render({ informs })
  }
]