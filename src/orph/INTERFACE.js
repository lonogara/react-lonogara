// @flow
import {
  isObj,
  EXHIBIT_SCROLL_ID,
  DETAIL_SCROLL_ID,
  getElementById,
  extractDetailScrollElement
} from '../util.js'

const { assign } = Object
const detailScrollElement = () => extractDetailScrollElement(getElementById(DETAIL_SCROLL_ID))

const REACT = (extension = {}) => [assign(extension, {

  DID_MOUNT: (n, { props, dispatch }): void =>
    props('firstIndex').then(firstIndex =>
      dispatch('RENDER:BY_REACT_DIDMOUNT', firstIndex)
    )

}),{
  prefix: 'REACT:',
  use: {
    props: true,
    dispatch: true
  }
}]

const DOM = (extension = {}) => [assign(extension, {

  VIEW_SWITCH: (e, { state, dispatch }): void => {
    const index = +e.target.dataset.index

    return state('index').then(nowIndex =>
      nowIndex !== index &&
      state('detail', true).then(detail =>
        Promise.all([
          dispatch('STORE:SET_DATA', {
            index: nowIndex,
            key: 'exhibitScrollTop',
            value: getElementById(EXHIBIT_SCROLL_ID).scrollTop
          }),
          detail.props && dispatch('STORE:SET_DATA', {
            index: nowIndex,
            key: 'detailScrollTop',
            value: detailScrollElement().scrollTop
          })
        ])
        .then(() => dispatch('STORE:GET_DATA', { index, key: 'detailProps' }))
        .then((detailProps) =>
          dispatch('RENDER:BY_DOM_VIEW_SWITCH', {
            index,
            detailProps,
            renderCallback: async () => {
              getElementById(EXHIBIT_SCROLL_ID).scrollTop = await dispatch(
                'STORE:GET_DATA',
                { index, key: 'exhibitScrollTop' }
              )

              if (detailProps) {
                detailScrollElement().scrollTop = await dispatch(
                  'STORE:GET_DATA',
                  { index, key: 'detailScrollTop' }
                )
              }
            }
          })
        )
      )
    )
  },

  DETAIL_OFF: (n, { state, dispatch }): void =>
    state('index')
    .then(index =>
      Promise.all([
        dispatch(
          'STORE:SET_DATA',
          { index, key: 'detailScrollTop', value: 0 }
        ),
        dispatch(
          'STORE:SET_DATA',
          { index, key: 'detailProps', value: undefined }
        )
      ])
    )
    .then(() => dispatch('RENDER:DETAIL_OFF'))
}),{
  prefix: 'DOM:',
  use: {
    state: true,
    dispatch: true
  }
}]

const PASSED = (extension = {}) => [assign(extension, {

  DETAIL_ON: (data, { state, dispatch }): void => {
    const props = { data }

    state('index')
    .then(index =>
      dispatch(
        'STORE:SET_DATA',
        { index, key: 'detailProps', value: props }
      )
    )
    .then(() => dispatch('RENDER:DETAIL_ON', props))
  },

  POPDOWN_ON: (arg, { dispatch }): void => {
    if (isObj(arg) && arg.src) {
      dispatch('RENDER:POPDOWN_ON', arg)
    }
  },

  INFORM_ON: (arg, { dispatch }): void => {
    const inform = +arg.inform
    if(inform || inform === 0){
      const { index } = arg
      dispatch(`RENDER:INFORM_CHANGE`, { index, inform })
    }
  }

}),{
  prefix: 'PASSED:',
  use: {
    state: true,
    dispatch: true
  }
}]

export { REACT, DOM, PASSED }