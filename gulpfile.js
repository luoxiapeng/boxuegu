
var gulp = require('gulp');

var transport = require('gulp-seajs-transport');

var concat = require('gulp-seajs-concat');

var uglify = require('gulp-uglify');

var clean = require('gulp-clean');

gulp.task('clean', function () {
	return gulp.src('./public/release')
		.pipe(clean());
});

gulp.task('module', ['clean'], function () {
	return gulp.src('./public/scripts/**/*.js', {base: './public'})
		.pipe(transport({
			idleading: '/release/'
		}))
		.pipe(concat())
		.pipe(uglify())
		.pipe(gulp.dest('./public/release'));
});

gulp.task('assets', function () {
	// return gulp.src('./public/assets/**/*.js', {base: './public'})
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest('./public/release'));
});

gulp.task('default', ['module', 'assets']);

