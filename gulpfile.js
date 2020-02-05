const gulp = require('gulp');
const { src, dest, series, parallel, watch } = gulp;
const concat = require('gulp-concat');
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

const js = () => {
  return src('./src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(minify({
      mangle: false,
      noSource: true
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./src/js/min'))
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