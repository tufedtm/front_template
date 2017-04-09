'use strict';

import gulp from 'gulp'
import nunjucks from 'gulp-nunjucks'
import {get as bsGet} from 'browser-sync';
import SRC_DIR from './CONST'

const browserSync = bsGet('server');

gulp.task('template', function () {
  return gulp.src([SRC_DIR.template_src, '!src/base.html'])
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(SRC_DIR.dest))
    .pipe(browserSync.stream())
});
