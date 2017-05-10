'use strict';

import gulp from "gulp";
import rimraf from "rimraf";
import SRC_DIR from "./CONST";


gulp.task('clear', cb => rimraf(SRC_DIR.dest, cb));
