//
// Flextype Gulp.js
// (c) Sergey Romanenko <https://github.com/Awilum>
//

var Promise = require("es6-promise").Promise,
    gulp = require("gulp"),
    csso = require("gulp-csso"),
    concat = require("gulp-concat"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    sass = require("gulp-sass");

gulp.task("simple-css", function() {
    return gulp
        .src("assets/scss/simple.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(
            autoprefixer({
                browsers: ["last 2 versions"],
                cascade: false
            })
        )
        .pipe(csso())
        .pipe(concat("default.min.css"))
        .pipe(gulp.dest("assets/dist/css/"));
});

gulp.task("js", function() {
    return gulp
        .src([
            "node_modules/jquery/dist/jquery.slim.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js",
            "assets/custom.js"
        ])
        .pipe(sourcemaps.init({largeFile: true}))
        .pipe(concat("default.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("assets/dist/js/"));
});

// gulp.task("custom-js", function() {
//     return gulp
//         .src("assets/custom.js")
//         .pipe(sourcemaps.init())
//         .pipe(concat("default.min.js"))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest("assets/dist/js"));
// });

gulp.task("bootstrap-css", function() {
    return gulp
        .src("node_modules/bootstrap/dist/css/bootstrap.min.css")
        .pipe(gulp.dest("assets/dist/css/"));
});

gulp.task("watch", function() {
    gulp.watch("assets/scss/**/*.scss", ["simple-css"]);
    gulp.watch("assets/custom.js", ["js"]);
});

gulp.task("default", ["simple-css", "bootstrap-css", "js", "watch"]);
