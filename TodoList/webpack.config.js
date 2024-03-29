const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
const config = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[chunkHash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

module.exports = config;