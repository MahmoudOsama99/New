var sass = require('gulp-sass')(require('sass'));
var { watch, src, dest, series } = require('gulp');
var concat = require('gulp-concat');
var prefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');

function html(cb) {

    src('./pug/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(dest('./dist'))
        .pipe(livereload());
    cb();
};

function js(cb) {
    src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(dest('./dist/js'))
        .pipe(livereload());
    cb();
};

function css(cb) {
    src(['./sass/**/*.css', './sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(prefixer())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
    .pipe(livereload());
    cb();

};

exports.default = function () {
    require('./server.js');
    livereload.listen();
    gulp.watch('./pug/**/*.pug', series('html'));
    gulp.watch('./js/*.js', series('js'));
    gulp.watch(['./sass/**/*.css', './sass/**/*.scss'], series('css'));
};

exports.css = css;
exports.js = js;
exports.html = html;