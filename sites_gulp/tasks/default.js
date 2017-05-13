'use strict';

import gulp from "gulp";
import runSequence from "run-sequence";


gulp.task('default', () => {
  runSequence(
    'clear',
    ['template', 'image', 'style', 'script', 'static'],
    ['serve', 'watch']
  );
});


gulp.task('build', () => {
  runSequence(
    'clear',
    ['template', 'image', 'style', 'script', 'static'],
  );
});
