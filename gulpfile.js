'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const path = require('path');
const del = require('del');

/**
 * variables
 */
const buildPath = 'build';


/**
 * tasks
 */
function buildStyles() {
  return gulp
    .src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.join(buildPath, 'css')));
}

function cleanup(cb) {
    return del(buildPath, cb);
}

function watch(cb) {
    return gulp.watch('scss/**/*.scss', buildStyles);

    cb();
}

function defaultTask(cb) {
    cleanup(cb);
    buildStyles(cb);
    watch(cb);

    cb();
}


exports.css = buildStyles;
exports.cleanup = cleanup;
exports.watch = watch;
exports.default = defaultTask;
