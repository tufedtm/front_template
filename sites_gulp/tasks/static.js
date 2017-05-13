'use strict';

import gulp from "gulp";
import SRC_DIR from "./CONST";


gulp.task('static:font', () =>
  gulp.src(SRC_DIR.static_font)
    .pipe(gulp.dest(SRC_DIR.dest + '/static/font'))
);


gulp.task('static:lib', () =>
  gulp.src(SRC_DIR.static_lib)
    .pipe(gulp.dest(SRC_DIR.dest + '/static/lib'))
);


gulp.task('static', ['static:font', 'static:lib']);
