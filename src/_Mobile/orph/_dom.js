// @flow
import { scrollDOM, isNumber } from './util.js'

export const SWITCH_VIEW = [
  switchView,
  {
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
  updateView,
  {
    dispatches: [
      'STORE:UPDATE_FACTORY',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:BY_DOM_UPDATE_VIEW'
    ]
  }
]

export const ON_DETAIL = [
  onDetail,
  {
    dispatches: ['STORE:GET_FACTORY_DETAIL', 'RENDER:ON_DETAIL']
  }
]

export const OFF_DETAIL = [
  offDetail,
  {
    dispatches: ['STORE:OFF_DETAIL_INDEX', 'RENDER:OFF_DETAIL']
  }
]

export const OFF_DRIFTING = [
  offDrifting,
  {
    dispatches: ['RENDER:OFF_DRIFTING']
  }
]

async function switchView(e, { state, dispatch }) {
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
}

function updateView(e, { state, dispatch }) {
  const viewIndex = state().index

  dispatch('STORE:UPDATE_FACTORY', viewIndex)
    .then(() => dispatch('STORE:GET_FACTORY_EXHIBIT', viewIndex))
    .then(exhibit => dispatch('RENDER:BY_DOM_UPDATE_VIEW', exhibit))
}

function onDetail(index, { state, dispatch }) {
  if (index) {
    dispatch('STORE:GET_FACTORY_DETAIL', {
      viewIndex: state().index,
      detailIndex: +index
    }).then(detail => dispatch('RENDER:ON_DETAIL', detail))
  }
}

function offDetail(e, { state, dispatch }) {
  dispatch('STORE:OFF_DETAIL_INDEX', state().index).then(() =>
    dispatch('RENDER:OFF_DETAIL')
  )
}

function offDrifting(e, { state, dispatch }) {
  if (state().drifting === 'lag') {
    dispatch('RENDER:OFF_DRIFTING')
  }
}
