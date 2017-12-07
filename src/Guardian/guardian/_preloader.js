// @flow
import { isFunction } from './util.js'

export default ({ Preloader }) => isFunction(Preloader) && Preloader
