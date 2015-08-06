var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('gulp-webpack');
var webpackProper = require('webpack');
var WebpackDevServer = require("webpack-dev-server");
var del = require('del');
var replace = require('gulp-replace');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var webpackConfig = require('./webpack.config.js');
var webpackStats = null;
var sass = require('gulp-ruby-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var path = require('path');
var run_sequence = require('run-sequence');
var karma = require('karma').server;

var wpDevServer;

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('webpack', function() {
  var myConfig = Object.create(webpackConfig);
  myConfig.bail = true
  return gulp.src('app/scripts/app.cjsx')
    .pipe(webpack(myConfig))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('sass', function(){
  sass('app/styles/main.scss')
    .pipe(replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', 'fonts'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('rev', ['webpack'], function() {
  return gulp.src('dist/scripts/*.js')
    .pipe(rev())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('copyIndex', ['rev'], function() {
  var manifest = gulp.src('dist/scripts/rev-manifest.json');
  return gulp.src('app/index.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('dist'));
});

gulp.task('copyAssets', function() {
  return gulp.src([
      'app/404.html',
      'app/robots.txt',
      'app/favicon.ico',
      'app/favicon-16.png',
      'app/favicon-32.png'])
    .pipe(gulp.dest('dist'));
});

gulp.task('copyImages', function() {
  return gulp.src('app/images/*')
    .pipe(gulp.dest('dist/images'));
})

gulp.task('copyFonts', function() {
  return gulp.src([
      'app/fonts/*',
      'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
      'bower_components/font-awesome/fonts/*'
    ])
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('sass-dev', function() {
  sass('app/styles/main.scss')
    .pipe(replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', 'fonts'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('copyIndex-dev', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['copyIndex', 'copyAssets', 'copyImages', 'copyFonts']);
gulp.task('copy-dev', ['copyIndex-dev', 'copyAssets', 'copyImages', 'copyFonts']);
gulp.task('build', ['copy', 'sass']);
gulp.task('build-dev', ['copy-dev', 'sass-dev']);
gulp.task('dist', function(cb){
  run_sequence('clean', 'build', cb);
});
gulp.task('default', ['dev']);
gulp.task('dev', function(cb){
  run_sequence('clean', 'dev-server', cb);
})

gulp.task('dev-server', ['sass-dev', 'webpack-dev-server'], function() {
  gulp.watch('./app/styles/**/*', ['sass-dev']);
  gulp.watch('./app/images/**/*', ['copyImages']);
  gulp.watch('./dist/**/*', function(evt){
    gutil.log(gutil.colors.cyan(evt.path), 'changed');
    wpDevServer.io.sockets.emit('ok');
  });
});

gulp.task("webpack-dev-server", ['build-dev'], function(cb) {
  // modify some webpack config options
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "source-map";
  myConfig.debug = true;
  myConfig.output.filename = 'app.js';
  myConfig.plugins = [
    new webpackProper.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
  ];

  // Start a webpack-dev-server
  wpDevServer = new WebpackDevServer(webpackProper(myConfig), {
    contentBase: 'dist',
    publicPath: "/" + myConfig.output.publicPath,
    stats: {
      colors: true
    }
  });
  wpDevServer.listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    cb();
  });
});
