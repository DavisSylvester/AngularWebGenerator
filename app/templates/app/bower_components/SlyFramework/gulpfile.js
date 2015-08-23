'use strict';

var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();
var jscs = require( 'gulp-jscs' );
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");


gulp.task( 'LESS', function() {
    gulp.src( 'src/less/**/SlyFramework.less' )
        .pipe( plugins.less( ) )
        .pipe( gulp.dest( './src/css' ) )
        .pipe( gulp.dest( './dist' ) )
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(rename("SlyFramework.min.css"))
        .pipe( gulp.dest( './dist' ) )

} );

gulp.task( 'CSSConcat', function() {
    return gulp.src( 'src/css/**/*.css' )
        .pipe( concatCss('slyframework2015.css' ) )
        .pipe( gulp.dest( './src/css/bundled/' ) );

} );

gulp.task( 'default', [ 'connect', 'LESS', 'inject', 'watcher' ] );

gulp.task( 'watcher', function() {
   gulp.watch( 'src/less/**/*.less', [ 'LESS', 'inject'] )

});

gulp.task( 'connect', function() {
    plugins.connect.server( {
        root: [ 'src' ],
        port: 3006,
        livereload: true
    } );
} );

gulp.task( 'inject', function() {
    var target = gulp.src( [ 'src/*.html' ] );
    var sources = gulp.src( 'dist/**/*min.css' );

    target.pipe( plugins.inject( sources, { relative: true } ) )
        .pipe( gulp.dest( 'src' ) );

   // gulp.watch( 'src/**/*.html', [ 'open' ] );
} );

gulp.task( 'open', function() {
    gulp.src( 'src/**/*.html' )
        .pipe( plugins.open( { url: 'localhost:3006', app: 'google-chrome' } ) )
});