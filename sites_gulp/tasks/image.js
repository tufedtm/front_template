'use strict';

import gulp from "gulp";
import imagemin from "gulp-imagemin";
import PATHS from "./CONST";


gulp.task('image', () =>
  gulp.src(PATHS.image.src)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({arithmetic: true, progressive: true}),
      imagemin.optipng({optimizationLevel: 7}),
      imagemin.svgo({
        plugins: [
          {removeTitle: true,},
          {removeDesc: {removeAny: true}},
          {cleanupListOfValues: true},
          {removeRasterImages: true},
          {removeDimensions: true},
          {removeAttrs: true},
          {removeElementsByAttr: true},
          {removeStyleElement: true},
          {removeScriptElement: true},
        ]
      })
    ]))
    .pipe(gulp.dest(PATHS.image.dst))
);
