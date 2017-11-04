var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exculde: /node_modules/,
        include: APP_DIR,
      },
      {
        test : /\.json$/,
        loader : 'json'
      },
      rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  }
};

module.exports = config;