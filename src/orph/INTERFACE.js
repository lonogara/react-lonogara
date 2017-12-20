// @flow
import { isObj } from '../util.js'
import { exhibitScrollDOM } from './util.js'

const WINDOW = {
  RESIZE_FORCE_UPDATE: (n, { update }) => update()
}

const REACT = {

  DID_MOUNT: [{
    dispatches: [
      'REACT:DID_MOUNT_FIRST',
      'REACT:DID_MOUNT_SECOND'
    ]
  },
  (n, { dispatch }): void => {
    dispatch('REACT:DID_MOUNT_FIRST').then(() =>
      dispatch('REACT:DID_MOUNT_SECOND')
    )
  }],

  DID_MOUNT_FIRST: [{
    dispatches: [
      'STORE:INIT',
      'PASS:DETAIL_ON',
      'PASS:POPDOWN_ON',
      'PASS:INFORM_ON',
      'STORE:SET_COMPONENT',
      'STORE:SET_DATA'
    ]
  },
  (n, { props, dispatch }): Promise<Array<void>> =>
    Promise.all(props().views.map(
      async ({ create }, index) => {

        await dispatch('STORE:INIT', index)

        const renderDetail = data => dispatch('PASS:DETAIL_ON', data)
        const setPopdown = src => dispatch('PASS:POPDOWN_ON', src)
        const setInform = inform => dispatch('PASS:INFORM_ON', { index, inform })

        const Components = await create({ renderDetail, setPopdown, setInform }) || {}

        // Exhibit
        await dispatch('STORE:SET_COMPONENT', {
          index,
          componentName: 'Exhibit',
          Component: Components['Exhibit']
        }).then(() =>
          dispatch('STORE:SET_DATA', {
            index,
            dataName: 'exhibitScrollTop',
            value: 0
          }))

        // Detail
        await dispatch('STORE:SET_COMPONENT', {
          index,
          componentName: 'Detail',
          Component: Components['Detail']
        }).then(() =>
          dispatch('STORE:SET_DATA', {
            index,
            dataName: 'detailProps',
            value: false
          }))

        return
      }
    ))
  ],

  DID_MOUNT_SECOND: [{
    dispatches: [
      'STORE:GET_COMPONENT',
      'RENDER:BY_REACT_DIDMOUNT'
    ]
  },
  async (n, { props, dispatch }): Promise<void> => {
    const index = props().firstIndex

    const componentName = 'Exhibit'
    const { Component } = await dispatch('STORE:GET_COMPONENT', { index, componentName })
    dispatch('RENDER:BY_REACT_DIDMOUNT', { index, Component })
  }]
}

const PASS = {

  DETAIL_ON: [{
    dispatches: [
      'STORE:SET_DATA',
      'STORE:GET_COMPONENT',
      'RENDER:DETAIL_ON'
    ]
  },
  (data, { state, dispatch }): void => {
    const { index } = state()

    dispatch('STORE:SET_DATA', {
      index,
      dataName: 'detailProps',
      value: { data }
    })
    .then(() =>
      dispatch('STORE:GET_COMPONENT', {
        index,
        componentName: 'Detail',
        dataName: 'detailProps'
      })
    )
    .then(details => dispatch('RENDER:DETAIL_ON', details))

  }],

  POPDOWN_ON: [{
    dispatches: ['RENDER:POPDOWN_ON']
  },
  (arg, { dispatch }): void => {
    if (isObj(arg) && arg.src) {
      dispatch('RENDER:POPDOWN_ON', arg)
    }
  }],

  INFORM_ON: [{
    dispatches: ['RENDER:INFORM_CHANGE']
  },
  (arg, { dispatch }): void => {
    const inform = +arg.inform
    if(inform || inform === 0){
      const { index } = arg
      dispatch(`RENDER:INFORM_CHANGE`, { index, inform })
    }
  }]
}

const DOM = {

  VIEW_SWITCH: [{
    dispatches: [
      'STORE:SET_DATA',
      'STORE:GET_COMPONENT',
      'RENDER:BY_DOM_VIEW_SWITCH'
    ]
  },
  async (e, { state, dispatch }): void => {
    const nowIndex = state().index
    const nextIndex = +e.target.dataset.index

    if (nowIndex === nextIndex) return

    // SET NOW SCROLLTOP STORE
    await dispatch('STORE:SET_DATA', {
      index: nowIndex,
      dataName: 'exhibitScrollTop',
      value: exhibitScrollDOM().scrollTop
    })

    const index = nextIndex

    // GET exhibits
    const exhibits = await dispatch('STORE:GET_COMPONENT', {
      index,
      componentName: 'Exhibit',
      dataName: 'exhibitScrollTop'
    })

    // GET details
    const details = await dispatch('STORE:GET_COMPONENT', {
      index,
      componentName: 'Detail',
      dataName: 'detailProps'
    })

    // RENDER
    dispatch('RENDER:BY_DOM_VIEW_SWITCH', { index, exhibits, details })
    
  }],

  DETAIL_OFF: [{
    dispatches: [
      'STORE:SET_DATA',
      'RENDER:DETAIL_OFF'
    ]
  },
  (n, { state, dispatch }): void => {
    dispatch('STORE:SET_DATA', {
      index: state().index,
      dataName: 'detailProps',
      value: false
    }).then(() => dispatch('RENDER:DETAIL_OFF'))
  }]

}

export { WINDOW, REACT, PASS, DOM }