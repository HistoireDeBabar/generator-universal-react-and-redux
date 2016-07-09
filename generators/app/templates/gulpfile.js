const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', ['sass', 'browserify', 'babel']);

gulp.task('lint', () =>
  gulp.src(['**.js', './src/**', './test/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);
