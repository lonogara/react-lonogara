import webpack from 'webpack'
import path from 'path'
import { contentBase } from './webpack.config.var.babel.js'

export const VARIABLE = 'dll'

export default {
  entry: ['react', 'react-dom'],
  output: {
    filename: `${VARIABLE}.js`,
    path: contentBase,
    library: VARIABLE
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(contentBase, `${VARIABLE}.manifest.json`),
      name: VARIABLE
    })
  ]
}
