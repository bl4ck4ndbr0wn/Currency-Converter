var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var livereload = require("gulp-livereload");
var watch = require("gulp-watch");
var batch = require("gulp-batch");

// JavaScript development.
var browserify = require("browserify");
var babelify = require("babelify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");
var gutil = require("gulp-util");
var rename = require("gulp-rename");

// CSS compilation.
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var concatCss = require("gulp-concat-css"); // optional

// HTML compilation.
var htmlmin = require("gulp-htmlmin");
var path = require("path");
var foreach = require("gulp-foreach");

// Clean dist folder
var clean = require("gulp-clean");

// Task clean dist folder
gulp.task("clean", function() {
  gulp.src("dist", { read: false }).pipe(clean());
});

// Task to compile js.
gulp.task("compile-js", function() {
  // app.js is your main JS file with all your module inclusions
  return browserify({
    entries: ["./src/js/main/index.js"],
    debug: true
  })
    .transform(babelify, { presets: ["env", "stage-0"] })
    .on("error", gutil.log)
    .bundle()
    .on("error", gutil.log)
    .pipe(source("bundle.min.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});
// Task to compile sw js.
gulp.task("compile-sw-js", function() {
  // app.js is your main JS file with all your module inclusions
  return gulp
    .src("./src/js/sw/index.js")
    .pipe(rename("sw.js"))
    .pipe(gulp.dest("dist"));
  // return browserify({
  //   entries: ["./src/js/sw/index.js"],
  //   debug: true
  // })
  //   .transform(babelify, { presets: ["env", "stage-0"] })
  //   .on("error", gutil.log)
  //   .bundle()
  //   .on("error", gutil.log)
  //   .pipe(source("sw.js"))
  //   .pipe(buffer())
  //   .pipe(sourcemaps.init())
  //   .pipe(uglify())
  //   .pipe(sourcemaps.write("./maps"))
  //   .pipe(gulp.dest("dist"))
  //   .pipe(livereload());
});

gulp.task("index-controller-js", function() {
  // app.js is your main JS file with all your module inclusions
  return browserify({
    entries: ["./src/js/main/indexController.js"],
    debug: true
  })
    .transform(babelify, { presets: ["env", "stage-0"] })
    .on("error", gutil.log)
    .bundle()
    .on("error", gutil.log)
    .pipe(source("indexController.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});
// Task to minify css.
gulp.task("minify-css", function() {
  return gulp
    .src(["src/css/style.css"])
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ debug: true }))
    .pipe(concat("style.min.css"))
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});
// Task to copy vendor css to dist.
gulp.task("copy-vendor-css", function() {
  return gulp.src(["./src/css/vendor/*"]).pipe(gulp.dest("dist/css/vendor"));
});
// Task to copy vendor js to dist.
gulp.task("copy-vendor-js", function() {
  return gulp.src(["./src/scripts/vendor/*"]).pipe(gulp.dest("dist/js/vendor"));
});
// Task to copy fonts to dist.
gulp.task("copy-fonts", function() {
  return gulp.src(["src/fonts/google-font.css"]).pipe(gulp.dest("dist/fonts/"));
});
// Task to copy images to dist.
gulp.task("copy-images", function() {
  return gulp
    .src(["src/images/*.{jpg,png,gif}", "src/images/**/*.{jpg,png,gif}"])
    .pipe(gulp.dest("dist/img/"));
});
// Task to copy fonts to dist.
gulp.task("copy-rem-assets", function() {
  return gulp.src(["src/*.txt", "src/*.json"]).pipe(gulp.dest("dist/"));
});

// Loop each html.
// https://www.npmjs.com/package/gulp-foreach
gulp.task("minify-html", function() {
  return gulp
    .src("src/*.html")
    .pipe(
      foreach(function(stream, file) {
        // Get the filename.
        var name = path.basename(file.path);
        return stream
          .pipe(
            htmlmin({
              collapseWhitespace: true,
              removeComments: true
            })
          )
          .pipe(concat(name));
      })
    )
    .pipe(gulp.dest("dist"));
});

// Task to watch.
gulp.task("watch", function() {
  // Watch all js files recursively.
  watch(
    ["src/js/**/*", "src/scripts/**/*"],
    batch(function(events, done) {
      gulp.start(
        [
          "copy-vendor-js",
          "compile-js",
          "compile-sw-js",
          "index-controller-js"
        ],
        done
      );
    })
  );

  // Watch all css files recursively.
  watch(
    ["src/css/**/*"],
    batch(function(events, done) {
      gulp.start(["minify-css", "copy-vendor-css"], done);
    })
  );
  // Watch all css files recursively.
  watch(
    ["src/*.html"],
    batch(function(events, done) {
      gulp.start(["minify-html"], done);
    })
  );

  // Watch all image files recursively.
  watch(
    ["src/images/**/*"],
    batch(function(events, done) {
      gulp.start("copy-images", done);
    })
  );

  // Watch all fonts files recursively.
  watch(
    ["src/fonts/**/*"],
    batch(function(events, done) {
      gulp.start("copy-fonts", done);
    })
  );

  //Watch all rem assets recursively
  watch(
    ["src/*.txt", "src/*.json"],
    batch(function(event, done) {
      gulp.start("copy-rem-assets", done);
    })
  );
});

// Development:
// Task when running `gulp` from terminal.
gulp.task("default", ["build"]);

// Production:
// Task when running `gulp build` from terminal.
gulp.task("build", [
  // "clean",
  "minify-css",
  "copy-fonts",
  "copy-images",
  "minify-html",
  "copy-rem-assets",
  "copy-vendor-css",
  "copy-vendor-js",
  "compile-js",
  "compile-sw-js",
  "index-controller-js",
  "watch"
]);
