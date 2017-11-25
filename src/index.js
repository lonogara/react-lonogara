import Guardian from './Guardian'
import _Desktop from './_Desktop'
import _Mobile from './_Mobile'

const Desktop = Guardian(_Desktop)
const Mobile = Guardian(_Mobile)

export { Desktop, Mobile }
