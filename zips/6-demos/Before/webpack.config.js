const path = require('path')

const include = path.join(__dirname, 'src')

module.exports = {
  devtool: 'source-map',
  mode: 'development',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
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
              presets: ['@babel/preset-react', '@babel/preset-env']
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
