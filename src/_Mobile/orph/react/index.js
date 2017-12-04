// @flow

export const DID_MOUNT = [
  async (n, { props, dispatch }) => {
    const { views, firstIndex } = props()

    // INIT
    await Promise.all(
      views.map(async ({ create }, index) => {
        const factory = create()
        await dispatch('STORE:SET_VIEW', { index, factory })
        await dispatch('STORE:INIT_FACTORY', index)
      })
    )

    // RENDER
    const exhibit = await dispatch('STORE:GET_FACTORY_EXHIBIT', firstIndex)
    dispatch('RENDER:BY_REACT_DIDMOUNT', { index: firstIndex, exhibit })
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_VIEW',
      'STORE:INIT_FACTORY',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:BY_REACT_DIDMOUNT'
    ]
  }
]

// export const DID_UPDATE = [
//   (n, util) => {},
//   {
//     states: [],
//     dispatches: []
//   }
// ]
