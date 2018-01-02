// @flow
import App from './App.jsx'
// import _guardian, { HoColors, Guardian } from '../guardian'
import _guardian, { HoColors, createGuardian } from '../guardian'

const guardian = _guardian()

guardian.colors = HoColors(() => ({
  base: 'rgb(24, 24, 35)',
  sub: 'rgb(255, 255, 255)',
  background: 'rgba(242, 242, 242, 0.78)',
  preloader: 'rgb(241, 241, 241)',
  detail: 'rgb(243, 243, 243)',
  detailQuit: 'rgb(24, 24, 35)',
  side: 'rgb(77, 172, 125)'
}))

export default createGuardian({ App, guardian })