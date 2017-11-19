/* required methods */
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

/* tasks */
// gulp.task('sass', function(){
//   return gulp.src(['scss/style.scss'])
//   .pipe(sass())
//   .pipe(gulp.dest('css'));
// });

gulp.task('watch',function(){
  gulp.watch('scss/*.scss',['sass']);
});

gulp.task('depsjs', function(){
  return gulp.src(['bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/jquery.easing/jquery.easing.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/wow/dist/wow.min.js',
                    'bower_components/sdk/index.js',
                    'bower_components/particles.js/particles.min.js'])
  .pipe(concat('deps.js'))
  .pipe(gulp.dest('js'))
});

gulp.task('depsDist', function (){
  return gulp.src(['js/deps.js'])
  .pipe(rename('deps.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('bin'));
});

gulp.task('default', function (callback){
  runSequence('depsjs','depsDist', 'watch',callback);
})
