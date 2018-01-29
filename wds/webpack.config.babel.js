import webpack from 'webpack'
import path from 'path'
import { wds, contentBase } from './webpack.config.var.babel.js'
import manifest from './served/dll.manifest.json'

const port = 7000

export default {
  devtool: `source-map`,
  entry: path.resolve(wds, './entry.js'),
  output: {
    path: contentBase,
    publicPath: `http://localhost:${port}/`
  },
  devServer: {
    port,
    contentBase,
    publicPath: '/',
    overlay: true,
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve('./node_modules')],
        use: [`babel-loader?cacheDirectory`]
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({ manifest }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
