var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('./styles/less/*.less')
        .pipe(concat('master.css'))
        .pipe(less())
        .pipe(gulp.dest('./dist/styles'))
});

gulp.task('watch', function () {
    gulp.watch('./styles/less/*.less', ['less']);
});