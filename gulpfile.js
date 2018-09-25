var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('gulp-autoprefixer')

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function() {
	return gulp.src('./css/sass/*.scss')
    .pipe(sourcemaps.init())
		.pipe(sass(sassOptions).on('error', sass.logError))

		.pipe(autoprefixer(
      {
        browsers: [
          '> 1%',
          'last 2 versions',
          'firefox >= 4',
          'safari 7',
          'safari 8',
          'IE 8',
          'IE 9',
          'IE 10',
          'IE 11'
          ],
          cascade: false
        }
      ))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
	gulp.watch('./css/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
