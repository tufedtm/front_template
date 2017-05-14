'use strict';

import gulp from "gulp";
import csso from "gulp-csso";
import gulpIf from "gulp-if";
import less from "gulp-less";
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import PATHS from "./CONST";
import browserSync from "./serve";


gulp.task('style', () =>
  gulp.src(PATHS.style.src)
    .pipe(plumber({errorHandler: notify.onError(error => error.message)}))
    .pipe(gulpIf(!global.isProd, sourcemaps.init()))
    .pipe(less())
    .pipe(postcss([
      require('autoprefixer')({
        cascade: false
      })
    ]))
    .pipe(csso({
      comments: false
    }))
    .pipe(gulpIf(!global.isProd, sourcemaps.write('.')))
    .pipe(gulp.dest(PATHS.style.dst))
    .pipe(browserSync.stream({match: '**/*.css'}))
);
