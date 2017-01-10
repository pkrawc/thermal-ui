const path = require('path')
const webpack = require('webpack')
const WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackErrorNotificationPlugin = require('webpack-error-notification')
const site = process.env.SITE

module.exports = {
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    noInfo: true
  },
  entry: site ? [
    './example'
  ] : {
    example: './example',
    index: './index'
  },
  output: site ? {
    path: './docs',
    filename: 'example.min.js'
  } : {
    path: './',
    filename: '[name]-build.js',
    chunkFilename: '[id].js',
    publicPath: '/',
    library: 'thermal-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.(jsx?|es6)$/,
        loader: 'babel',
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: site ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new WebpackHtmlWebpackPlugin({
      template: 'example.html'
    })
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new WebpackErrorNotificationPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackHtmlWebpackPlugin({
      template: 'example.html'
    })
  ],
  resolve: {
    root: path.join(__dirname),
    exclude: /node_modules/,
    extensions: ['', '.js', '.jsx', '.es6']
  }
}
