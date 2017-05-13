'use strict';

import gulp from "gulp";
import babel from "gulp-babel";
import concat from "gulp-concat";
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import SRC_DIR from "./CONST";
import browserSync from "./serve";


gulp.task('script', () =>
  gulp.src(SRC_DIR.script_src)
    .pipe(plumber({errorHandler: notify.onError(error => error.message)}))
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SRC_DIR.dest + '/static/js/'))
    .pipe(browserSync.stream({match: "**/*.js"}))
);
