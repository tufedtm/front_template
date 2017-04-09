'use strict';

import gulp from 'gulp'
import ghPages from 'gulp-gh-pages'
import runSequence from 'run-sequence'

gulp.task('gh_pages:src', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('gh_pages', function () {
  runSequence(
    'clear',
    ['template', 'style', 'script', 'static'],
    'gh_pages:src'
  );
});
