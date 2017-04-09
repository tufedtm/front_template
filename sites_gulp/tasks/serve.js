'use strict';

import gulp from 'gulp'
import {create as bsCreate} from 'browser-sync';
import SRC_DIR from './CONST'

const browserSync = bsCreate('server');

gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: SRC_DIR.dest
    },
  });
});
