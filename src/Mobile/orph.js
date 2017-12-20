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

const sideScrollDOM = () => document.getElementById('sideScrollElement')

const DRIFTING_ON = [{ states: ['drifting'] }, (n, { render }): void => render({ drifting: true })]
const DRIFTING_LAG = [{ states: ['drifting'] }, (n, { render }): void => render({ drifting: 'lag' })]
const DRIFTING_OFF = [{ states: ['drifting'] }, (n, { state, render }): void =>
  state().drifting === 'lag' &&
  render({ drifting: false }, () => { sideScrollDOM().scrollTop = 0 })
]

const orph = new Orph()
add(orph, 'STORE', STORE)
add(orph, 'RENDER', Object.assign({}, RENDER, { DRIFTING_ON, DRIFTING_LAG, DRIFTING_OFF }))
add(orph, 'WINDOW', WINDOW)
add(orph, 'REACT', REACT)
add(orph, 'DOM', DOM)
add(orph, 'PASS', PASS)
export default orph