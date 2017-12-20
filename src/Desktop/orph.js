// @flow
import Orph from 'orph'
import {
  WINDOW,
  REACT,
  DOM,
  PASS,
  RENDER,
  STORE,
  add
} from '../orph'

const DIMMING_ON = [{ states: ['dimming'] }, (n, { render }): void => render({ dimming: true })]
const DIMMING_OFF = [{ states: ['dimming'] }, (n, { render }): void => render({ dimming: false })]

const DIM_SWITCH = [
  { dispatches: ['RENDER:DIMMING_ON', 'RENDER:DIMMING_OFF'] },
  (e, { state, dispatch }): void => {
    dispatch(
      !state().dimming
      ? 'RENDER:DIMMING_ON'
      : 'RENDER:DIMMING_OFF'
    )
  }
]

const orph = new Orph()
add(orph, 'STORE', STORE)
add(orph, 'RENDER', Object.assign({}, RENDER, { DIMMING_ON, DIMMING_OFF }))
add(orph, 'WINDOW', WINDOW)
add(orph, 'REACT', REACT)
add(orph, 'DOM', Object.assign({}, DOM, { DIM_SWITCH }))
add(orph, 'PASS', PASS)
export default orph