'use strict';

import gulp from "gulp";
import PATHS from "./CONST";


gulp.task('static:font', () =>
  gulp.src(PATHS.font.src)
    .pipe(gulp.dest(PATHS.font.dst))
);


gulp.task('static:lib', () =>
  gulp.src(PATHS.lib.src)
    .pipe(gulp.dest(PATHS.lib.dst))
);


gulp.task('static', ['static:font', 'static:lib']);
