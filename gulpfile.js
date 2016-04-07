var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    changed = require('gulp-changed'),
    browserSync = require("browser-sync"),
    plumber = require('gulp-plumber');


gulp.task('less', function() {
    gulp.src(['static/src/less/**/*.less', '!static/src/less/common/module.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('static/src/css/'))
});

gulp.task('watch', function() {
    gulp.watch('static/src/less/**/*.less', ['less'])
});

gulp.task('server', ['less'], function() {
    browserSync.init({
        files: '*',
        server: {
            baseDir: '.'
        }
    });
    gulp.watch('static/src/less/**/*.less', ['less']);
    gulp.watch('*.html').on('change', browserSync.reload);
});