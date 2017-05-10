'use strict';

import {create} from "browser-sync";
import gulp from "gulp";
import SRC_DIR from "./CONST";


const browserSync = create('server');


gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: SRC_DIR.dest
    },
  });
});


export default browserSync;
