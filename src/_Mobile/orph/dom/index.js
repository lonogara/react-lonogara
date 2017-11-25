export const OFF_PRELOADING = [
  (n, { dispatch }) => dispatch('RENDER:OFF_PRELOADING'),
  {
    states: [],
    dispatches: ['RENDER:OFF_PRELOADING']
  }
]

export const SWITCH_VIEW = [
  (e, util) => {
    const nowIndex = util.state().index
    const nowScrollTop = 'hoge'

    const nextIndex = +e.target.dataset.index

    const { dispatch } = util
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_SCROLLTOP',
      'STORE:GET_SCROLLTOP',
      'STORE:GET_FACTORY_EXHIBIT',
      'STORE:GET_DETAILING',
      'STORE:GET_FACTORY_DETAIL'
    ]
  }
]

export const UPDATE_VIEW = [
  (e, {}) => {},
  {
    states: [],
    dispatches: []
  }
]

export const ON_DETAIL = [
  (e, {}) => {},
  {
    states: [],
    dispatches: []
  }
]

export const OFF_DETAIL = [
  (e, {}) => {},
  {
    states: [],
    dispatches: []
  }
]

export const ON_DRIFTING = [
  (e, { dispatch }) => dispatch('RENDER:ON_DRIFTING'),
  {
    states: [],
    dispatches: ['RENDER:ON_DRIFTING']
  }
]

export const OFF_DRIFTING = [
  (e, { dispatch }) => dispatch('RENDER:OFF_DRIFTING'),
  {
    states: [],
    dispatches: ['RENDER:OFF_DRIFTING']
  }
]
