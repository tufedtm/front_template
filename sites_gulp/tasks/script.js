'use strict';

import gulp from "gulp";
import babel from "gulp-babel";
import concat from "gulp-concat";
import gulpIf from "gulp-if";
import notify from "gulp-notify";
import plumber from "gulp-plumber";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import PATHS from "./CONST";
import browserSync from "./serve";


gulp.task('script', () =>
  gulp.src(PATHS.script.src)
    .pipe(plumber({errorHandler: notify.onError(error => error.message)}))
    .pipe(gulpIf(!global.isProd, sourcemaps.init()))
    .pipe(concat('app.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulpIf(!global.isProd, sourcemaps.write('.')))
    .pipe(gulp.dest(PATHS.script.dst))
    .pipe(browserSync.stream({match: "**/*.js"}))
);
