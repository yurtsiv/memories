var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babel = require('babelify'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload');

gulp.task('babel', function() {
      var bundler = watchify(browserify('./src/main.js', { debug: true }).transform(babel));
      bundler.bundle()  
              .on('error', function (e) { gutil.log(e) })
              .pipe(source('bundle.js'))
              .pipe(buffer())
              .pipe(gulp.dest('./static'))
              .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/*.js', ['babel']);
});

gulp.task('default', ['babel', 'watch'])
