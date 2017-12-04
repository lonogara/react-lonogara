// @flow
import { scrollDOM } from './util.js'

export const OFF_PRELOADING = [offPreloading, { states: ['preloading'] }]
export const ON_DETAIL = [onDetail, { states: ['detail'] }]
export const OFF_DETAIL = [offDetail, { states: ['detail'] }]
export const ON_DRIFTING = [onDrifting, { states: ['drifting'] }]
export const LAG_DRIFTING = [lagDrifting, { states: ['drifting'] }]
export const OFF_DRIFTING = [offDrifting, { states: ['drifting'] }]
export const BY_REACT_DIDMOUNT = [
  byReactDidMount,
  { states: ['index', 'exhibit'] }
]
export const BY_DOM_UPDATE_VIEW = [byDomUpdateView, { states: ['exhibit'] }]
export const BY_DOM_SWITCH_VIEW = [
  byDomSwitchView,
  { states: ['index', 'exhibit', 'detail'] }
]

function offPreloading(n, { render }) {
  render({ preloading: false })
}
function onDetail(elements, { render }) {
  render({ detail: { elements, mountWithShut: true } })
}
function offDetail(n, { render }) {
  render({ detail: undefined })
}
function onDrifting(n, { render }) {
  render({ drifting: true })
}
function lagDrifting(n, { render }) {
  render({ drifting: 'lag' })
}
function offDrifting(n, { render }) {
  render({ drifting: false })
}
function byReactDidMount({ index, exhibit }, { render }) {
  render({ index, exhibit })
}
function byDomUpdateView(exhibit, { render }) {
  render({ exhibit })
}
function byDomSwitchView(packet, { render, dispatch }) {
  const index = packet.viewIndex
  const exhibit = packet.exhibit
  const scrollTop = packet.scrollTop
  const detail = packet.detail
    ? { elements: packet.detail, mountWithShut: false }
    : undefined

  render({ index, exhibit, detail }, () => {
    scrollDOM().scrollTop = scrollTop
  })
}
