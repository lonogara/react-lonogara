// @flow
import { scrollDOM } from '../util.js'

export const BY_REACT_DIDMOUNT = [
  ({ index, exhibit }, { render }) => render({ index, exhibit }),
  { states: ['index', 'exhibit'], dispatches: [] }
]

export const BY_DOM_SWITCH_VIEW = [
  (packet, { render, dispatch }) => {
    const { viewIndex, exhibit, scrollTop } = packet
    const detail = packet.detail
      ? { elements: packet.detail, mountWithShut: false }
      : undefined
    render({ index: viewIndex, exhibit, detail }, () => {
      scrollDOM().scrollTop = scrollTop
    })
  },
  {
    states: ['index', 'exhibit', 'detail'],
    dispatches: []
  }
]

export const BY_DOM_UPDATE_VIEW = [
  (exhibit, { render }) => render({ exhibit }),
  { states: ['exhibit'], dispatches: [] }
]

export const ON_DETAIL = [
  (detailElements, { render }) =>
    render({ detail: { elements: detailElements, mountWithShut: true } }),
  { states: ['detail'], dispatches: [] }
]

export const OFF_DETAIL = [
  (n, { render }) => render({ detail: undefined }),
  { states: ['detail'], dispatches: [] }
]

export const OFF_PRELOADING = [
  (n, { render }) => render({ preloading: false }),
  { states: ['preloading'], dispatches: [] }
]

export const ON_DRIFTING = [
  (n, { render }) => render({ drifting: true }),
  { states: ['drifting'], dispatches: [] }
]

export const LAG_DRIFTING = [
  (n, { render }) => render({ drifting: 'lag' }),
  { states: ['drifting'], dispatches: [] }
]

export const OFF_DRIFTING = [
  (n, { render }) => render({ drifting: false }),
  { states: ['drifting'], dispatches: [] }
]
