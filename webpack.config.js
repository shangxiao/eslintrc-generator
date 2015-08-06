
var webpack = require('webpack');

// a note about hashing: at time of writing, webpack didn't seem to support hashing vendor.js with a separate hash
// so delegating that responsibility to gulp-rev

module.exports = {
  entry: {
    app: "./app/scripts/app.jsx",
    vendor: [
      'react/addons',
    ]
  },
  output: {
      path: __dirname + '/dist',
      publicPath: "scripts/",
      filename: "app.js"
  },
  externals: {
    // using jquery from cdn, alternatively load from npm and use expose-loader
    'jquery': 'jQuery'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          optional: ['es7.classProperties', 'es7.decorators']
        },
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'node_modules/backbone/node_modules'],
    extensions: ['', '.js', '.jsx']
  }
};
