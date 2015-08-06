// Karma configuration
// Generated on Sat Jun 20 2015 00:34:41 GMT+1000 (AEST)

webpackConfig = require('./webpack.test.config.js')

module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    files: [
      'test/spec/calculator.js',
      'test/spec/support-plan-status.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // FIXME: need to provide an entry point? don't run webpack for each test file?
      'test/spec/*.js': ['webpack']
    },

    reporters: ['dots'],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // autoWatch: true,

    browsers: [
      // 'PhantomJS'
      // 'Firefox',
      'Chrome'
    ],

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true,
    },
  });
};
