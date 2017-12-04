// @flow
import { scrollDOM, isNumber } from '../util.js'

export const OFF_PRELOADING = [
  (n, { dispatch }) => dispatch('RENDER:OFF_PRELOADING'),
  { states: [], dispatches: ['RENDER:OFF_PRELOADING'] }
]

export const SWITCH_VIEW = [
  async (e, { state, dispatch }) => {
    const nowIndex = state().index
    const viewIndex = +e.target.dataset.index

    if (nowIndex === viewIndex) return

    // SET NOW SCROLLTOP STORE
    await dispatch('STORE:SET_SCROLLTOP', {
      index: nowIndex,
      value: scrollDOM().scrollTop
    })

    // RENDER
    const detailIndex = await dispatch('STORE:GET_DETAIL_INDEX', viewIndex)
    dispatch('RENDER:BY_DOM_SWITCH_VIEW', {
      viewIndex,
      exhibit: await dispatch('STORE:GET_FACTORY_EXHIBIT', viewIndex),
      scrollTop: await dispatch('STORE:GET_SCROLLTOP', viewIndex),
      detail:
        isNumber(detailIndex) &&
        (await dispatch('STORE:GET_FACTORY_DETAIL', { viewIndex, detailIndex }))
    })
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_SCROLLTOP',
      'STORE:GET_FACTORY_EXHIBIT',
      'STORE:GET_SCROLLTOP',
      'STORE:GET_DETAIL_INDEX',
      'STORE:GET_FACTORY_DETAIL',
      'RENDER:BY_DOM_SWITCH_VIEW'
    ]
  }
]

export const UPDATE_VIEW = [
  (e, { state, dispatch }) => {
    const viewIndex = state().index
    return dispatch('STORE:UPDATE_FACTORY', viewIndex)
      .then(() => dispatch('STORE:GET_FACTORY_EXHIBIT', viewIndex))
      .then(exhibit => dispatch('RENDER:BY_DOM_UPDATE_VIEW', exhibit))
  },
  {
    states: [],
    dispatches: [
      'STORE:UPDATE_FACTORY',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:BY_DOM_UPDATE_VIEW'
    ]
  }
]

export const ON_DETAIL = [
  (index, { state, dispatch }) =>
    index &&
    dispatch('STORE:GET_FACTORY_DETAIL', {
      viewIndex: state().index,
      detailIndex: +index
    }).then(detail => dispatch('RENDER:ON_DETAIL', detail)),
  {
    states: [],
    dispatches: ['STORE:GET_FACTORY_DETAIL', 'RENDER:ON_DETAIL']
  }
]

export const OFF_DETAIL = [
  (e, { state, dispatch }) =>
    dispatch('STORE:OFF_DETAIL_INDEX', state().index).then(() =>
      dispatch('RENDER:OFF_DETAIL')
    ),
  {
    states: [],
    dispatches: ['STORE:OFF_DETAIL_INDEX', 'RENDER:OFF_DETAIL']
  }
]

export const ON_DRIFTING = [
  (e, { dispatch }) => dispatch('RENDER:ON_DRIFTING'),
  { states: [], dispatches: ['RENDER:ON_DRIFTING'] }
]

export const LAG_DRIFTING = [
  (e, { dispatch }) => dispatch('RENDER:LAG_DRIFTING'),
  { states: [], dispatches: ['RENDER:LAG_DRIFTING'] }
]

export const OFF_DRIFTING = [
  (e, { state, dispatch }) =>
    state().drifting === 'lag' && dispatch('RENDER:OFF_DRIFTING'),
  { states: [], dispatches: ['RENDER:OFF_DRIFTING'] }
]
