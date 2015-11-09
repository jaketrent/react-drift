var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

var PORT = 3000

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + PORT,
    'webpack/hot/only-dev-server',
    'babel/polyfill',
    './index.js'
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/dist')
  },
  module: {
    loaders: [
      {
        test: /\.js/, loader: 'react-hot!babel?stage=0', exclude: /node_modules/
      },
      {
        test: /\.jpg/, loader: 'file'
      },
      {
        test: /\.css/, loader: 'style!css?modules&localIdentName=[local]---[hash:base64:5]!cssnext'
      }
    ]
  },
  devServer: {
    port: PORT,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './node_modules/html-webpack-template/index.html',
      devServer: 'http://localhost:' + PORT,
      appMountId: 'app'
    })
  ]
}