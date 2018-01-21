// @flow
import App from './App.jsx'
import Orph from 'orph'
import { STORE, RENDER, REACT, DOM, PASSED } from '../orph'
import { create, HoColors } from '../defaults'
import Guardian from '../Guardian.jsx'
import { getElementById, MOBILE_SIDE_SCROLL_ID } from '../util.js'

const orph = new Orph({
  preloading: true,
  index: undefined,
  detail: {},
  popdown: {},
  drifting: false,
  informs: [0, 0, 0, 0]
})

orph.register(...STORE())

orph.register(...RENDER({
  DRIFTING_ON: (n, { render }): void => render({ drifting: true }),
  DRIFTING_LAG: (n, { render }): void => render({ drifting: 'lag' }),
  DRIFTING_OFF: (n, { state, render }): void =>
    state('drifting') === 'lag' &&
    render({ drifting: false }, () => {
      getElementById(MOBILE_SIDE_SCROLL_ID).scrollTop = 0
    })
}))

orph.register(...REACT())

orph.register(...DOM())

orph.register(...PASSED())

const defaults = create()

defaults.colors = HoColors(() => ({
  base: 'rgb(24, 24, 35)',
  sub: 'rgb(255, 255, 255)',
  background: 'rgba(242, 242, 242, 0.78)',
  preloader: 'rgb(241, 241, 241)',
  detail: 'rgb(243, 243, 243)',
  detailQuit: 'rgb(24, 24, 35)',
  side: 'rgb(77, 172, 125)'
}))

export default Guardian({ App, orph, defaults })