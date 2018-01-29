import execa from 'execa'
import isExist from 'path-exists'
import path from 'path'
import { VARIABLE } from './webpack.config.dll.babel.js'

const log = message => console.log('\n' + message + '\n')

const conditionExeca = (condition, command) =>
  condition
    ? execa.shell(command).then(({ cmd }) => log(`done: ${cmd}`))
    : log(`ignored: ${command}`)

const ExecServeDll = () =>
  isExist(`./wds/served/${VARIABLE}.manifest.json`).then(exist =>
    conditionExeca(
      !exist,
      `yarn webpack --config ${path.normalize(
        './wds/webpack.config.dll.babel.js'
      )}`
    )
  )

ExecServeDll().catch(({ stderr }) => console.error(stderr))
