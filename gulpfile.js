var gulp  = require('gulp');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var rimraf = require('rimraf')
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");


gulp.task('server', function() {
    browserSync.init({
        server: {
        	port: 9000,
            baseDir: "build"
        }
});

gulp.watch('build/**/*').on('change', browserSync.reload);


});



gulp.task('js', function () {
  return gulp.src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/owl.carousel/dist/owl.carousel.js',
    'source/js/jquery.viewportchecker.js',
    'node_modules/slideout/dist/slideout.min.js',
    'source/js/jquery.spincrement.min.js',
    'source/js/jquery.fancybox.min.js',
    'source/js/slider.js',
    'source/js/valid.js',
    'source/js/map.js',
    'source/js/anim.js',
    'source/js/popup.js',
    'source/js/main.js'
      
    ])
   .pipe(sourcemaps.init())
   .pipe(concat('main.min.js'))
   .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});



gulp.task('templates:compile', function buildHTML() {
  return gulp.src('source/template/index.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});


gulp.task('templates:compile:news', function buildHTML() {
  return gulp.src('source/template/news.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});


gulp.task('templates:compile:new', function buildHTML() {
  return gulp.src('source/template/new.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('templates:compile:services', function buildHTML() {
  return gulp.src('source/template/services.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('templates:compile:price', function buildHTML() {
  return gulp.src('source/template/price.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('templates:compile:gallery', function buildHTML() {
  return gulp.src('source/template/gallery.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('templates:compile:company', function buildHTML() {
  return gulp.src('source/template/company.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});

gulp.task('templates:compile:map', function buildHTML() {
  return gulp.src('source/template/map.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});


gulp.task('sass', function () {
  return gulp.src('source/styles/main.scss')
    .pipe(sass({outputStyles: 'compressed'}).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('clean', function del(cb){
	return rimraf('build', cb);
});

gulp.task('copy:fonts', function(){
	return gulp.src('source/fonts/**/*.*')
		.pipe(gulp.dest('build/fonts'));
});

gulp.task('copy:images', function(){
	return gulp.src('source/images/**/*.*')
		.pipe(gulp.dest('build/images'));
});

gulp.task('copy:css', function(){
  return gulp.src('source/styles/css/**/*.*')
    .pipe(gulp.dest('build/css'));
});

gulp.task('copy', gulp.parallel('copy:fonts','copy:images','copy:css'));

gulp.task('watch', function(){
	gulp.watch('source/template/**/*.pug', gulp.series("templates:compile"));
	gulp.watch('source/styles/**/*.scss', gulp.series("sass"));
  gulp.watch('source/js/**/*.js', gulp.series("js"));
});


gulp.task('default', gulp.series(
	'clean',
	gulp.parallel('templates:compile', 'js', 'sass', 'copy'),
	gulp.parallel('watch', 'server')
	)
);