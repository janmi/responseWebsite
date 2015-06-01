

var gulp    = require('gulp'),
    less    = require('gulp-less'),
    plumber = require('gulp-plumber');


    gulp.task('less',function() {
        gulp.src(['less/**/*.less', '!less/common/module.less'])
            .pipe(plumber())
            .pipe(less())
            .pipe(gulp.dest('css/'))
    });

    gulp.task('watch',function(){
        gulp.watch('less/**/*.less',['less'])
    });