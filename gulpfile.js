const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');
gulp.task('default', ['html', 'css', 'js']);
gulp.task('html', () => {
    gulp.src('templates/*.html')
        .pipe(gulp.dest('docs/templates'));
    gulp.src('assets/*')
        .pipe(gulp.dest('docs/'));
    return gulp.src('*.html')
        .pipe(gulp.dest('docs/'));
});
gulp.task('css', () => {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('docs/'));
});
gulp.task('js', () => {
    return gulp.src('js/app.js')
        .pipe(browser.browserify())
        .pipe(gulp.dest('docs/'));
});
gulp.task('watch', ['default'], () => {
    gulp.watch('js/*.js', ['js']);
    gulp.watch('js/*/*.js', ['js']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('*.html', ['html']);
    gulp.watch('templates/*.html', ['html']);
    gulp.watch('assets/*', ['html']);
});