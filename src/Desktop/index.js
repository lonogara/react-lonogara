// @flow
import App from './App.jsx'
import Orph from 'orph'
import { STORE, RENDER, REACT, DOM, PASSED } from '../orph'
import { create, HoColors } from '../defaults'
import Guardian from '../Guardian.jsx'

const orph = new Orph({
  preloading: true,
  index: undefined,
  detail: {},
  popdown: {},
  dimming: false,
  informs: [0, 0, 0, 0]
})

orph.register(...STORE())

orph.register(...RENDER({
  DIMMING_ON: (n, { render }): void => render({ dimming: true }),
  DIMMING_OFF: (n, { render }): void => render({ dimming: false })
}))

orph.register(...REACT())

orph.register(...DOM({
  DIM_SWITCH: (e, { state, dispatch }): void =>
    state('dimming').then(dimming =>
      dispatch(
        !dimming
        ? 'RENDER:DIMMING_ON'
        : 'RENDER:DIMMING_OFF'
      )
    )
}))

orph.register(...PASSED())

orph.register({
  RESIZE_FORCE_UPDATE: (e, { update }) => update()
},{
  prefix: 'WINDOW:',
  use: { update: true }
})

const defaults = create()

defaults.colors = HoColors(() => ({
  base: '#ffffff',
  sub: 'rgb(145, 145, 145)',
  background: 'rgba(0, 0, 0, 0.6)',
  preloader: 'rgb(241, 241, 241)',
  detail: 'rgb(243, 243, 243)',
  detailQuit: 'rgb(66, 62, 89)'
}))

export default Guardian({ App, orph, defaults })