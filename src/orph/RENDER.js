// @flow

export default (extension = {}) => [Object.assign(extension, {

  PRELOADING_OFF: (n, { render }): void =>
    render({ preloading: false }),

  POPDOWN_ON: ({ src, vertically }, { render }): void =>
    render({ popdown: { src, vertically } }),

  POPDOWN_OFF: (n, { render }): void =>
    render({ popdown: {} }),

  DETAIL_ON: (props, { render }): void =>
    render({ detail: { props, mountWithShut: true } }),

  DETAIL_OFF: (n, { render }): void =>
    render({ detail: {} }),

  BY_REACT_DIDMOUNT: (index, { render }): void =>
    render({ index }),

  BY_DOM_VIEW_SWITCH: ({
    index,
    detailProps,
    renderCallback
  },{ render }): void =>
    render({
      index,
      detail: !detailProps ? {} : { props: detailProps, mountWithShut: false }
    },renderCallback),

  INFORM_CHANGE: ({ index, inform }, { state, render }) => {
    const informs = state('informs')
    informs[index] = inform
    render({ informs })
  }

}),{
  prefix: 'RENDER:',
  use: {
    state: true,
    render: true
  }
}]