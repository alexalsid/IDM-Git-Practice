const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('default', ['styles-refresh', 'html', 'watch']); 

gulp.task('styles-refresh', () => {
    return gulp.src('./src/stylus/screen.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());

});


gulp.task('html', () => {
    return gulp.src('./src/views/index.html')
        .pipe(gulp.dest('./dist/'));
});


gulp.task('watch', ['styles-refresh', 'html'], () => {

    browserSync.init({

        server: {
            baseDir: 'dist'
        }
    })

    gulp.watch('src/stylus/screen.styl', ['styles-refresh']);



});


