const { resolve } = require('path')
const webpack = require('webpack')
const dev = process.env.NODE_ENV === 'development'
const site = process.env.SITE

const config = {
  cache: true,
  devtool: dev ? 'inline-source-map' : 'eval',
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
      hash: true,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      modules: false,
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
    'example' : resolve(__dirname, 'src/example.js'),
    'index' : resolve(__dirname, 'src/index.js')
  },
  externals: dev ? {} : {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-router-dom': 'react-router-dom',
    'styled-components': 'styled-components'
  },
  output: {
    path: site ? resolve(__dirname, 'docs') : resolve(__dirname, 'build'),
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
  plugins: dev ? [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
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
