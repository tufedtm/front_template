'use strict';

import gulp from "gulp";
import SRC_DIR from "./CONST";
import browserSync from "./serve";


gulp.task('watch', () => {
  gulp.watch(SRC_DIR.static_img, ['image', browserSync.reload]);
  gulp.watch(SRC_DIR.style_watch, ['style']);
  gulp.watch(SRC_DIR.script_src, ['script']);
  gulp.watch(SRC_DIR.template_watch, ['template']);
});
