var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var webpack = require('gulp-webpack-build');
var path = require('path');
var del = require('del');
var jest = require('gulp-jest');
var webpackConfigPath = './webpack.config.js';

gulp.task('default', ['clean', 'nodemon:app', 'build-cli-dev']);

gulp.task('clean', function (cb) {
    del(['build'], cb);
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

gulp.task('webpack:dev', ['clean'], function() {
    gulp.src(path.resolve(webpackConfigPath))
        .pipe(webpack.run());
});

gulp.task('build', ['clean'], function() {
    gulp.src(path.resolve(webpackConfigPath))
        .pipe(webpack.run());
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
