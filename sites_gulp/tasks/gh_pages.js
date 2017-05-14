'use strict';

import gulp from "gulp";
import ghPages from "gulp-gh-pages";
import PATHS from "./CONST";


gulp.task('gh_pages:src', () =>
  gulp.src(PATHS.ghPages)
    .pipe(ghPages())
);


gulp.task('gh_pages', ['build', 'gh_pages:src']);
