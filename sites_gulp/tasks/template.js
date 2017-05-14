'use strict';

import gulp from "gulp";
import notify from "gulp-notify";
import nunjucks from "gulp-nunjucks";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import PATHS from "./CONST";
import browserSync from "./serve";


gulp.task('template', () =>
  gulp.src([PATHS.template.src, '!src/base.twig'])
    .pipe(plumber({errorHandler: notify.onError(error => error.message)}))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(PATHS.template.dst))
    .pipe(browserSync.stream())
);
