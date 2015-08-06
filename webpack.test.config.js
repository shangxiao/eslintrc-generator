var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel?optional[]=es7.classProperties&es7.decorators', exclude: /node_modules/ }
    ]
  },
  watch: true,
  resolve: {
    alias: {
      'app': __dirname + '/app/scripts'
    },
    modulesDirectories: ['node_modules', 'node_modules/backbone/node_modules'],
    extensions: ['', '.js', '.jsx', '.cjsx', '.coffee']
  }
};
