const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/root.js',
  output: { path: __dirname, filename: './dist/bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
