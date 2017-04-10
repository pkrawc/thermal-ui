const { resolve } = require('path')
const webpack = require('webpack')
const env = process.env.NODE_ENV

module.exports = function(env) {
  return {
    cache: true,
    entry: {'index' : resolve(__dirname, 'index.js') },
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom',
      'styled-components': 'styled-components'
    },
    output: {
      path: resolve(__dirname, 'build'),
      filename: '[name].build.js',
      chunkFilename: '[id].js',
      library: 'thermal-ui',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|es6)$/,
          loader: 'babel-loader',
          exclude: [/node_modules/]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ],
    resolve: {
      alias: {
        variables$: resolve(__dirname, 'variables.js')
      },
      extensions: ['.js', '.jsx', '.es6']
    }
  }
}
