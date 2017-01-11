const { join, resolve } = require('path')
const webpack = require('webpack')
const prod = process.env.NODE_ENV === 'production'

const config = {
  cache: true,
  devtool: prod ? 'eval' : 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    contentBase: resolve(__dirname, 'docs'),
    historyApiFallback: true,
    host: '0.0.0.0',
    quiet: false,
    noInfo: false,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: true,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: false,
      publicPath: true
    }
  },
  entry: {
    'example' : [resolve(__dirname, 'src/example.js')],
    'index' : resolve(__dirname, 'src/index.js')
  },
  output: {
    path: prod ? join(__dirname, 'build') : join(__dirname, 'docs'),
    filename: '[name]-build.js',
    chunkFilename: '[id].js',
    library: 'thermal-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      { test: /\.(jsx?|es6)$/, loader: 'babel-loader', exclude: [/node_modules/] }
    ]
  },
  plugins: prod ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
       debug: true
     })
  ],
  resolve: {
    modules: [
      join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.es6']
  }
}

module.exports = config
