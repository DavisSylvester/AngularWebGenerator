
var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minicss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var modRewrite = require('connect-modrewrite');
var inject = require('gulp-inject');


var lessFiles = 'src/assets/**/*.less';
var cssFiles = 'src/assets/css/**/*.css';
var baseDir = 'app/assets/js/';
var helpers = baseDir + '*Helpers*/*.js';
var models = baseDir + '*Models*/*.js';
var modules = baseDir + '**/app.js';
var routes = baseDir + '**/route.Config.js'; 
var controllers = baseDir + '**/*Controller.js';
var directives = baseDir + '**/*Directive*.js';
var filters = baseDir + '**/*Filter*.js';
var services = baseDir + '**/*Service*.js';

var allAngularCustomFiles = [helpers, models, modules, routes, controllers, directives, filters, services];


gulp.task('watch', function () {
    gulp.watch([lessFiles], ['less']);
    gulp.watch([cssFiles], ['CopySrcCSS']);
    gulp.watch(allAngularCustomFiles, ['customAngularJS']);
});

gulp.task('customAngularJS', function () {
    var appRoot = 'app/';
    var srcIndex = appRoot + 'index.html';

    var sources = gulp.src(allAngularCustomFiles, {read: false});
    var target = gulp.src(srcIndex);

    return target.pipe(inject(sources, {name: 'angular', relative: true}))
            .pipe(gulp.dest(appRoot));


});

gulp.task('CopySrcCSS', function () {
    gulp.src('src/assets/css/**/*.css')
            .pipe(gulp.dest('app/assets/css/'));
});

gulp.task('webServerDev', function () {
    gulp.src(['./app'])
            .pipe(webserver({
                livereload: {
                    enable: true
                },
                //                path: '/',
                directoryListing: false,
                open: true,
                host: 'localhost',
                https: false,
                port: 5555,
                fallback: 'index.html'
//                middleware: 
            }));
});

gulp.task('InstallAngularRequirement', function () {
    var bowerRoot = 'app/bower_components/';
    var jQuerySrc = bowerRoot + 'jquery/dist/jquery.min.js';
    var angular = bowerRoot + 'angular/angular.min.js';
    var uiRouter = bowerRoot + 'ui-router/release/angular-ui-router.js';

    var fontAwesome = bowerRoot + 'font-awesome/css/font-awesome.min.css';
    var slyFramework = bowerRoot + 'SlyFramework/dist/slyFramework.min.css';

    var customCSS = 'app/assets/css/custom.css';
    var AllOtherCSS = 'app/assets/css/**.css, !app/assets/css/custom.css';

    var appRoot = 'app/';
    var srcIndex = appRoot + 'index.html';

    var target = gulp.src(srcIndex);
    var sources = gulp.src([jQuerySrc, angular, uiRouter, fontAwesome, slyFramework, customCSS, AllOtherCSS], {read: false});

    return target.pipe(inject(sources, {relative: true}))
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
            .pipe(gulp.dest('app/assets/css'))
            .pipe(gulp.dest('src/assets/css'));
});



gulp.task('default', ['webServerDev', 'watch', 'less', 'InstallAngularRequirement']);


