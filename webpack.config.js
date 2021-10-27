const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'client', 'src', 'index.jsx'),

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },

  externals: {
    'react/addons': true, // important!!
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true
  }
}