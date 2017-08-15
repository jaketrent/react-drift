const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackTemplate = require('html-webpack-template')

var path = require('path')
var webpack = require('webpack')

const include = path.join(__dirname, 'src')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      appMountId: 'app'
    })
  ],
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['react', 'env'],
              plugins: ['transform-object-rest-spread']
            }
          }
        ],
        include
      },
      {
        test: /\.jpg/,
        loaders: ['file-loader'],
        include
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]---[hash:base64:5]',
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        include
      }
    ]
  }
}
