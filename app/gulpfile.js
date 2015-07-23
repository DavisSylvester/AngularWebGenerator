/* Project Geek Force Primary Gulp File */
/*
 *  By:         Davis Sylvester 
 *  Date:      July 23, 2015
 */

var gulp = require('gulp');
var connect = require('gulp-webserver');
var config = require('./gulp.config.js')();
var inject = require('gulp-inject');
var concat_css = require('gulp-concat-css');


gulp.task('watcher', function () {
    gulp.watch(config.webFiles, ['injectCSS'])
            .on('change', function (event) {
                console.log('File ' + event.path + ' was ' + event.type + ' has been changed');
            });
});

gulp.task('webServerDev', function () {
    gulp.src(['./public_html/src'])
            .pipe(connect({
                livereload: {
                    enable: true
                },
                path: '/',
                directoryListing: false,
                open: true,
                host: '0.0.0.0',
                port: 5555
            }));

    gulp.src('./public_html/app')
            .pipe(connect({
                livereload: {
                    enable: true,
                    port: 35730
                },
                directoryListing: false,
                open: false,
                port: 5556
            }));
});

gulp.task('concatCSS', function () {
    return gulp.src(['./public_html/src/assets/css/*.css'])
            .pipe(concat_css('bundled.css'))
            .pipe(gulp.dest('./public_html/src/assets/css/bundled/'));
});

gulp.task('injectCSS', function () {
    var target = gulp.src('./public_html/src/index.html');
    var sources = gulp.src(['./public_html/src/assets/css/main.css'],
            {
                read: false                
            });

    return target.pipe(inject(sources, {
        relative: true        
    }))
            .pipe(gulp.dest('./public_html/src/'));
});

gulp.task('injectJS', function () {
    var target = gulp.src('./public_html/src/index.html');
    var sources = gulp.src(['./public_html/src/assets/js/custom/*.js'],
            {
                read: false
            });

    return target.pipe(inject(sources))
            .pipe(gulp.dest('./public_html/src/'));
});

gulp.task('default', ['webServerDev', 'watcher', 'injectCSS', 'injectJS']);