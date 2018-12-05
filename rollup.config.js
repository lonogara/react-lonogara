import flow from 'rollup-plugin-flow'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-auto-external'
import prettier from 'rollup-plugin-prettier'

export default {
  input: `src/index.js`,
  external: [
    '@babel/runtime/regenerator'
  ],
  output: [
    { format: 'cjs', file: `dist/cjs.js` },
    { format: 'es', file: `dist/es.js` }
  ],
  plugins: [
    flow({ pretty: true }),
    babel({ exclude: 'node_modules/**' }),
    commonjs({ sourceMap: false }),
    external({ builtins: true, dependencies: true }),
    prettier({ tabWidth: 2, semi: false, singleQuote: true })
  ]
}