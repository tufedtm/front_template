'use strict';

import gulp from "gulp";
import nunjucks from "gulp-nunjucks";
import rename from "gulp-rename";
import SRC_DIR from "./CONST";
import browserSync from "./serve";


gulp.task('template', () =>
  gulp.src([SRC_DIR.template_src, '!src/base.twig'])
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(SRC_DIR.dest))
    .pipe(browserSync.stream())
);
