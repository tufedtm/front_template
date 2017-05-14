'use strict';

import gulp from "gulp";
import rimraf from "rimraf";
import PATHS from "./CONST";


gulp.task('clear', cb => rimraf(PATHS.dst, cb));
