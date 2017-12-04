// @flow

export const DID_MOUNT = [
  didMount,
  {
    dispatches: [
      'STORE:SET_VIEW',
      'STORE:GET_FACTORY_EXHIBIT',
      'RENDER:BY_REACT_DIDMOUNT'
    ]
  }
]

async function didMount(n, { props, dispatch }) {
  const { views, firstIndex } = props()

  await Promise.all(
    views.map(async ({ create }, index) => {
      const factory = create()
      await factory.init()
      await dispatch('STORE:SET_VIEW', { index, factory })
      return
    })
  )

  const exhibit = await dispatch('STORE:GET_FACTORY_EXHIBIT', firstIndex)
  dispatch('RENDER:BY_REACT_DIDMOUNT', { index: firstIndex, exhibit })
}
