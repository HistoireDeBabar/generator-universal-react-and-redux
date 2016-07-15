const gulp = require('gulp');
const babel = require('gulp-babel');
const istanbul = require('gulp-babel-istanbul');
const injectModules = require('gulp-inject-modules');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('default', ['sass', 'browserify', 'babel']);

gulp.task('lint', () =>
  gulp.src(['**.js', './src/**', './test/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('pre-testCoverage', () => {
  return gulp.src(['src/**/*.js*', '!src/index.jsx', '!src/routes.jsx'])
    .pipe(istanbul({
      includeUntested: true,
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('cover', ['pre-testCoverage'], () => {
  return gulp.src(['test/**/*.js'])
    .pipe(babel())
    .pipe(injectModules())
    .pipe(mocha({ require: ['./test/.jsdom.js'] }))
    .pipe(istanbul.writeReports());
});
