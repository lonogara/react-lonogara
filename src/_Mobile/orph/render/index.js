// @flow

export const INDEX_EXHIBIT = [
  (packet, { render }) =>
    render({
      index: packet.index,
      exhibit: packet.exhibit
    }),
  {
    states: ['index', 'exhibit'],
    dispatches: []
  }
]

export const INDEX_EXHIBIT_DETAIL = [
  (packet, { render }) =>
    render({
      index: packet.index,
      exhibit: packet.exhibit,
      detail: packet.detail
    }),
  {
    states: ['index', 'exhibit', 'detail'],
    dispatches: []
  }
]

export const DETAIL = [
  (detail, { render }) => render({ detail }),
  {
    states: ['detail'],
    dispatches: []
  }
]

export const OFF_PRELOADING = [
  (n, { render }) => render({ preloading: false }),
  {
    states: ['preloading'],
    dispatches: []
  }
]

export const ON_DRIFTING = [
  (n, { render }) => render({ drifting: true }),
  {
    states: ['drifting'],
    dispatches: []
  }
]

export const OFF_DRIFTING = [
  (n, { render }) => render({ drifting: false }),
  {
    states: ['drifting'],
    dispatches: []
  }
]
