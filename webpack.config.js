var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')

module.exports = {
  entry: [
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
        test: /\.js/, loader: 'babel?stage=0'
      },
      {
        test: /\.css/, loader: 'style!css'
      },
      {
        test: /\.jpg/, loader: 'file'
      }
    ]
  },
  devServer: {
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './node_modules/html-webpack-template/index.html',
      devServer: 'http://localhost:3000',
      appMountId: 'app'
    })
  ]
}