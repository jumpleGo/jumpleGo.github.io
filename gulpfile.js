var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('babel', function () {
    return gulp.src('app/js-es6/script.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('app/js-es5/'))
});



gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app/',
        },
        notify: false,
        tunnel: true
    });
});




gulp.task('watch', ['browser-sync', 'babel'], function () {
    gulp.watch('app/scss/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js-es6/*.js', ['babel']);

});




gulp.task('default', ['watch']);
