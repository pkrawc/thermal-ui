const path = require('path')
const webpack = require('webpack')
const WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
const prod = process.env.NODE_ENV === 'production'

const config = {
  cache: true,
  debug: true,
  devtool: prod ? 'eval' : 'inline-source-map',
  devServer: {
    hot: true,
    quite: true
  },
  entry: {
    'docs/' : './src/example.js',
    'build/' : './src/index.js'
  },
  output: {
    path: path.join(__dirname, '/'),
    publicPath: '/',
    filename: '[name]index.js',
    chunkFilename: '[id].js',
    library: 'thermal-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { test: /\.(jsx?|es6)$/, loader: 'babel', exclude: [/node_modules/] }
    ]
  },
  plugins: prod ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      compress: {
        warnings: false
      }
    }),
    new WebpackHtmlWebpackPlugin({
      template: 'src/example.html',
      filename: 'docs/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ] : [
    new webpack.NoErrorsPlugin(),
    new WebpackHtmlWebpackPlugin({
      template: 'src/example.html'
    })
  ],
  resolve: {
    root: path.join(__dirname),
    exclude: /node_modules/,
    extensions: ['', '.js', '.jsx', '.es6']
  }
}

module.exports = config
