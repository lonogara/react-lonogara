// @flow

export const DID_MOUNT = [
  (n, util) => {
    const { views, firstIndex } = util.props()
    const { dispatch } = util

    Promise.all(
      views.map(({ factory }, index) =>
        dispatch('STORE:SET_VIEW', { index, factory: factory() }).then(() =>
          dispatch('STORE:INIT_FACTORY', index)
        )
      )
    ).then(() =>
      dispatch('STORE:GET_FACTORY_EXHIBIT', firstIndex).then(exhibit =>
        dispatch('RENDER:INDEX_EXHIBIT', { index: firstIndex, exhibit })
      )
    )
    // .then(() =>
    //   dispatch("UTIL:SET_TIMEOUT", 1500).then(() =>
    //     dispatch("RENDER:OFF_PRELOADING")
    //   ))
  },
  {
    states: [],
    dispatches: [
      'STORE:SET_VIEW',
      'STORE:INIT_FACTORY',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:INDEX_EXHIBIT'
      // "UTIL:SET_TIMEOUT",
      // "RENDER:OFF_PRELOADING"
    ]
  }
]

export const DID_UPDATE = [
  (n, util) => {
    console.log('DID_UPDATE')
    console.log(util.state())
  },
  {
    states: [],
    dispatches: []
  }
]
