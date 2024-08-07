const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Define a task
gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')  // Adjust this path as needed
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));      // Adjust this path as needed
});

// Default task
gulp.task('default', gulp.series('sass'));
