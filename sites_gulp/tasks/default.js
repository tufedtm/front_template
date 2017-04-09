'use strict';

import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('default', function () {
  runSequence(
    'clear',
    ['template', 'style', 'script', 'static'],
    ['serve', 'watch']
  );
});

gulp.task('build', function () {
  runSequence(
    'clear',
    ['template', 'style', 'script', 'static']
  );
});
