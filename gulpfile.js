var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('stylesSCSS', function() {
    gulp.src(['app/scss/reset.scss', 'app/scss/main.scss', 'app/scss/**/*.scss'])
        .pipe(concat('app.scss'))
        .pipe(gulp.dest('./app/'))
});

gulp.task('stylesCSS', function() {
    gulp.src('app/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/'))
});

gulp.task('scssWatch', function() {
    gulp.watch('app/**/*.scss', ['stylesSCSS']);
    gulp.watch('app/scss/*.scss', ['stylesSCSS']);
    gulp.watch('app/app.scss', ['stylesCSS']);
});

gulp.task('default', ['stylesSCSS', 'stylesCSS', 'scssWatch']);
