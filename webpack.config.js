const path = require('path')
const webpack = require('webpack')
const WebpackHtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackErrorNotificationPlugin = require('webpack-error-notification')

module.exports = {
  cache: true,
  debug: true,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    noInfo: true
  },
  entry: {
    example: './example',
    index: './index'
  },
  output: {
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
  plugins: [
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
