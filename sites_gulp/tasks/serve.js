'use strict';

import {create} from "browser-sync";
import gulp from "gulp";
import PATHS from "./CONST";


const browserSync = create('server');


gulp.task('serve', () => {
  browserSync.init({
    notify: false,
    reloadOnRestart: true,
    server: PATHS.dst,
  });
});


export default browserSync;
