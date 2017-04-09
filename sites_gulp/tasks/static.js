'use strict';

import gulp from 'gulp'
import SRC_DIR from './CONST'

gulp.task('static:font', function () {
  return gulp.src(SRC_DIR.static_font)
    .pipe(gulp.dest(SRC_DIR.dest + '/static/font'))
});

gulp.task('static:img', function () {
  return gulp.src(SRC_DIR.static_img)
    .pipe(gulp.dest(SRC_DIR.dest + '/static/img'))
});

gulp.task('static:lib', function () {
  return gulp.src(SRC_DIR.static_lib)
    .pipe(gulp.dest(SRC_DIR.dest + '/static/lib'))
});

gulp.task('static', ['static:font', 'static:img', 'static:lib']);
