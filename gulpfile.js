var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var nodemon = require('gulp-nodemon');
var webpack = require('gulp-webpack-build');
var path = require('path');
var del = require('del');
var jest = require('gulp-jest');

gulp.task('default', ['clean', 'nodemon:app', 'build-cli-dev']);

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('nodemon:app', ['clean'], function () {
    nodemon({
      script: './start.js',
      ignore: ['build/**'],
      ext: 'js jsx',
      execMap: {
        js: "iojs"
      }
    });
});

gulp.task('webpack:dev', ['clean', 'set-dev-node-env'], function() {
    gulp.src(path.resolve('./webpack.config.js'))
        .pipe(webpack.run());
});

gulp.task('webpack:prod', ['webpack:dev', 'set-prod-node-env'], function() {
  return gulp.src('public/js/build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/js/build/dist'));
});

gulp.task('build-cli-dev', ['webpack:dev'], function() {
    gulp.watch(['**/*.jsx', 'styles/**/*.js', 'utils/**/*.js'], ['webpack:dev']);
});

gulp.task('jest', function () {
    return gulp.src('__tests__').pipe(jest({
        scriptPreprocessor: "./spec/support/preprocessor.js",
        unmockedModulePathPatterns: [
          "node_modules/react"
        ],
        testDirectoryName: "spec",
        testPathIgnorePatterns: [
          "node_modules",
          "spec/support"
        ],
        moduleFileExtensions: [
          "js",
          "json",
          "react"
        ]
    }));
});
