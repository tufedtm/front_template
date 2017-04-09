'use strict';

import gulp from 'gulp'
var rimraf = require('rimraf');
import SRC_DIR from './CONST'

gulp.task('clear', function (cb) {
  rimraf(SRC_DIR.dest, cb);
});
