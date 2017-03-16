const { resolve } = require('path')
const webpack = require('webpack')

const config = {
  cache: true,
  entry: {'index' : resolve(__dirname, 'src/index.js') },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    'styled-components': 'styled-components'
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: '[name]-build.js',
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
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    })
  ],
  resolve: {
    modules: [
      resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.es6']
  }
}

module.exports = config
