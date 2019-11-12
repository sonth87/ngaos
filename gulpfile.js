var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('container/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
        // .pipe(livereload());
});

//  gulp.task('js', function(){
//     return gulp.src(['container/js/plugins/*.js', 'container/js/*.js'])
//         .pipe(concat('all.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('watch', function(){
//     gulp.watch('container/scss/*.scss', ['sass']);
//     gulp.watch('container/js/**/*.js', ['js']);
// });

gulp.task('images', function () {
    return gulp.src('container/image/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(livereload());
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: '/'
      },
    })
  })

gulp.task('watch', function() {
    gulp.watch('container/scss/*.scss', gulp.series('sass'));
    // gulp.watch('container/js/*.js', gulp.series('scripts'));
    gulp.watch('container/image/*', gulp.series('images'));
  });

// Default Task
// gulp.task('default', ['sass', 'watch']);