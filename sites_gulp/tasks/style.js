'use strict';

import gulp from "gulp";
import csso from "gulp-csso";
import less from "gulp-less";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import SRC_DIR from "./CONST";
import browserSync from "./serve";


gulp.task('style', () =>
  gulp.src(SRC_DIR.style_src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
      require('autoprefixer')
    ]))
    .pipe(csso({
      comments: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SRC_DIR.dest + '/static/css/'))
    .pipe(browserSync.stream({match: '**/*.css'}))
);
