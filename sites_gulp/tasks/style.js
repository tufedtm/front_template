'use strict';

import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps'
import less from 'gulp-less'
import postcss from 'gulp-postcss'
import {get as bsGet} from 'browser-sync';
import SRC_DIR from './CONST'

const browserSync = bsGet('server');

gulp.task('style', function () {
  return gulp.src(SRC_DIR.style_src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
      require('autoprefixer')
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SRC_DIR.dest + '/static/css/'))
    .pipe(browserSync.stream({match: '**/*.css'}))
});
