// @flow
import App from './App.jsx'
import _guardian, { HoColors, Guardian } from '../guardian'

const guardian = _guardian()

guardian.colors = HoColors(() => ({
  base: '#ffffff',
  sub: 'rgb(145, 145, 145)',
  background: 'rgba(0, 0, 0, 0.6)',
  preloader: 'rgb(241, 241, 241)',
  detail: 'rgb(243, 243, 243)',
  detailQuit: 'rgb(66, 62, 89)'
}))

export default Guardian({ App, guardian })