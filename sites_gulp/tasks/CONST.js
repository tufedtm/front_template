export default {
  dst: 'dist',
  ghPages: 'dist/**/*',

  font: {
    src: 'src/static/font/**/*',
    dst: 'dist/static/font',
    watch: 'src/static/font/**/*'
  },

  image: {
    src: 'src/static/img/**/*',
    dst: 'dist/static/img',
    watch: 'src/static/img/**/*'
  },

  lib: {
    src: 'src/static/lib/**/*',
    dst: 'dist/static/lib',
    watch: 'src/static/lib/**/*'
  },

  script: {
    src: 'src/static/js/*.js',
    dst: 'dist/static/js',
    watch: 'src/static/js/*.js'
  },

  style: {
    src: 'src/static/style/app.less',
    dst: 'dist/static/css',
    watch: 'src/static/style/**/*.less'
  },

  template: {
    src: 'src/*.twig',
    dst: 'dist',
    watch: 'src/**/*.twig'
  },
};
