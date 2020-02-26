const gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync').create();

exports.styles = () => {
    return gulp.src('./src/assets/styles/less/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./src/assets/styles/css'))
};

exports.html = () => {
    return gulp.src('./src/assets/html/*.html')
        .pipe(fileinclude({
            prefix: '@@'
        }))
        .pipe(gulp.dest('./src/'))
};

exports.default = () => {
    browserSync.init({
        server: {
            baseDir: './src/'
        }
    });
    gulp.watch('./src/assets/html/**/*.html', gulp.series(['html']))
    gulp.watch('./src/assets/styles/less/**/*.less', gulp.series(['styles']))
    gulp.watch('./src/').on('change', browserSync.reload)

}