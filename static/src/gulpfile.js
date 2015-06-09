

var gulp    = require('gulp'),
    less    = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber');


    gulp.task('less',function() {
        gulp.src(['less/**/*.less', '!less/common/module.less'])
            .pipe(plumber())
            .pipe(less())
            .pipe(autoprefixer('last 2 versions'))
            .pipe(gulp.dest('css/'))
    });

    gulp.task('watch',function(){
        gulp.watch('less/**/*.less',['less'])
    });