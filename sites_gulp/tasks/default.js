'use strict';

import gulp from "gulp";
import runSequence from "run-sequence";


gulp.task('default', () => {
  runSequence(
    'clear',
    ['template', 'style', 'script', 'static'],
    ['serve', 'watch']
  );
});


gulp.task('build', () => {
  runSequence(
    'clear',
    ['template', 'style', 'script', 'static']
  );
});
