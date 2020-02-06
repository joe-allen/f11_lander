const gulp = require('gulp');
const { src, dest, series, parallel, watch } = gulp;
const cp = require("child_process");

// SCSS
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
sass.compiler = require('node-sass');

// compile to css
const scss = (cb) => {
  return src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(postcss([ autoprefixer({
      cascade: false
    }) ]))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/css/'))
};

// watch scss
const scssWatch = (cb) => {
  watch('./src/scss/**/*.scss', scss);
  cb();
};

// JS
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const named = require('vinyl-named');

const js = () => {
  const env = process.env.NODE_ENV || 'development';
  return src('./src/scripts/**/*.js')
    .pipe(named())
    .pipe(webpackStream(webpackConfig(env), webpack))
    .pipe(dest('./src/js/min'))
};

const jsWatch = (cb) => {
  watch('./src/scripts/**/*.js', js);
  cb();
};

// run eleventy serve
const render = () => {
  return cp.spawn("npx", ["eleventy", "--serve"], { stdio: "inherit" });
};

exports.default = series(scssWatch, jsWatch, render);