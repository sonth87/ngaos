var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var minifyCss = require('gulp-cssnano');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');

gulp.task('sass', function () {
    return gulp.src('container/scss/theme.scss')
        .pipe(sass())
        // .pipe(minifyCss())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
        // .pipe(livereload());
});

 gulp.task('scripts', function(){
    return gulp.src(['container/js/*.js'])
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('fonts', function(){
   return gulp.src(['container/font/**/*'])
       .pipe(gulp.dest('dist/font'));
});

gulp.task('images', function () {
    return gulp.src('container/image/**/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(livereload());
});

gulp.task('views', function buildHTML() {
  return gulp.src('container/views/*.pug')
  .pipe(pug({
    // Your options in here.
    pretty: true
  }))
  .pipe(gulp.dest('./'))
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: '/'
      },
    })
  })

gulp.task('watch', function() {
    gulp.watch('container/scss/**/*', gulp.series('sass'));
    gulp.watch('container/js/**/*', gulp.series('scripts'));
    gulp.watch('container/font/**/*', gulp.series('fonts'));
    gulp.watch('container/image/**/*', gulp.series('images'));
    gulp.watch('container/views/**/*', gulp.series('views'));
  });

// Default Task
// gulp.task('default', ['sass', 'watch']);