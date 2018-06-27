var gulp = require("gulp");
var connect = require("gulp-connect");
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");

gulp.task("connect", function() {
  connect.server({
    base: "http://localhost",
    port: 9000,
    root: "./dist",
    livereload: true
  });
});

gulp.task("js", function() {
  browserify("./src/js/app.js")
    .transform(babelify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./dist/scripts"))
    .pipe(connect.reload());
});

gulp.task("html", function() {
  gulp
    .src("./src/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
});

gulp.task("css", function() {
  gulp
    .src("./src/css/*.css")
    .pipe(gulp.dest("./dist/css"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch("./src/**/*.js", ["js"]);
  gulp.watch("./src/*.html", ["html"]);
  gulp.watch("./src/css/*.css", ["css"]);
});

gulp.task("default", ["js", "html", "css", "connect", "watch"]);
