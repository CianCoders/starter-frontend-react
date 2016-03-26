var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports?jQuery=jquery'
      },
      { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file' },
    ]
  },
  devServer: {
    historyApiFallback: true,
    publicPath: '/build/'
  }
}
