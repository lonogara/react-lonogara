import Orph from 'orph'
import { STORE, add } from '../../orph'
import * as RENDER from './RENDER.js'
import { WINDOW, REACT, DOM, PASS } from './INTERFACE.js'

const orph = new Orph()
add(orph, STORE, 'STORE')
add(orph, RENDER, 'RENDER')
add(orph, WINDOW, 'WINDOW')
add(orph, REACT, 'REACT')
add(orph, DOM, 'DOM')
add(orph, PASS, 'PASS')
export default orph