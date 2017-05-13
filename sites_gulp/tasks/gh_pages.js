'use strict';

import gulp from "gulp";
import ghPages from "gulp-gh-pages";


gulp.task('gh_pages:src', () =>
  gulp.src('./dist/**/*')
    .pipe(ghPages())
);


gulp.task('gh_pages', ['build', 'gh_pages:src']);
