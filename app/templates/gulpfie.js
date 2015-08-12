
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minicss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var inject = require('gulp-inject');


var lessFiles = 'src/assets/**/*.less';

gulp.task('watch', function () {
    gulp.watch([lessFiles], ['less']);


});

gulp.task('webServerDev', function () {
    gulp.src(['./app'])
            .pipe(webserver({
                livereload: {
                    enable: true
                },
                path: '/',
                directoryListing: false,
                open: true,
                host: 'localhost',
                port: 5555
            }));
});

gulp.task('InstallAngularRequirement', function(){
    var bowerRoot = 'app/bower_components/';
    var jQuerySrc = bowerRoot + 'jquery/dist/jquery.min.js';
    var angular = bowerRoot + 'angular/angular.min.js';
    var uiRouter = bowerRoot + 'ui-router/release/angular-ui-router.js';

    var appRoot = 'app/';
    var srcIndex = appRoot + 'index.html';

    var target = gulp.src(srcIndex);
    var sources = gulp.src([jQuerySrc, angular, uiRouter], { read: false });

    return target.pipe(inject(sources))
        .pipe(gulp.dest(appRoot));
        

});


gulp.task('less', function () {
    return gulp.src('src/assets/less/*.less')
            .pipe(sourcemaps.init())
            .pipe(less({}))
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(sourcemaps.write('../maps'))
D
            .pipe(gulp.dest('assets/css'))
            .pipe(gulp.dest('src/assets/css'));
});



gulp.task('default', ['webServerDev', 'watch', 'less'] );


