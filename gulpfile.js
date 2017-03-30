var gulp = require('gulp'),
    concat = require('gulp-concat'),
    less = require('gulp-less');

gulp.task('less', function () {
    gulp.src('./styles/less/*.less')
        .pipe(concat('master.css'))
        .pipe(less())
        .pipe(gulp.dest('./dist/styles'));
});

gulp.task('js', function () {
    gulp.src('./scripts/*.js')
        .pipe(concat('master.js'))
        .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('watch', function () {
    gulp.watch('./styles/less/*.less', ['less']);
    gulp.watch('./scripts/*.js', ['js']);
});