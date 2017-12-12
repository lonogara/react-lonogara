// @flow
import { isNumber } from './util.js'

export default ({ firstIndex }) => (isNumber(firstIndex) ? firstIndex : 0)
