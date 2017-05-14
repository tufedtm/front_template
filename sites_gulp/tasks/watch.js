'use strict';

import gulp from "gulp";
import PATHS from "./CONST";
import browserSync from "./serve";


gulp.task('watch', () => {
  gulp.watch(PATHS.image.watch, ['image', browserSync.reload]);
  gulp.watch(PATHS.style.watch, ['style']);
  gulp.watch(PATHS.script.watch, ['script']);
  gulp.watch(PATHS.template.watch, ['template']);
});
