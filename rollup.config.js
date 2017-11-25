const rollup = require('rollup')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const flow = require('rollup-plugin-flow')

rollup
  .rollup({
    input: `src/index.js`,
    plugins: [flow(), babel(), commonjs({ sourceMap: false })]
  })
  .then(bundle => {
    bundle.write({ format: 'cjs', file: `dist/cjs.js` })
    bundle.write({ format: 'es', file: `dist/es.js` })
  })
  .catch(err => console.error(err))
