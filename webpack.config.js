var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  entry: ['whatwg-fetch',APP_DIR + '/index.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        include : APP_DIR,
        exclude: /(node_modules)/,
        use: [{
          loader : 'babel-loader',
          options: {
            
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
            "style-loader",
            "css-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      }
    ]
  }
};

module.exports = config;