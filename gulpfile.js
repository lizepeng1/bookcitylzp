var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");

//压缩css
var mincss = require("gulp-minify-css");
//压缩js
var minjs = require("gulp-uglify");

//编译less
var less = require("gulp-less");

//同异步处理函数
var sequence = require("gulp-sequence");

//数据
var objlist = require("./src/js/data/mock");
//es6变es5
var babel = require("gulp-babel");

//压缩js
//压缩css
//压缩html

//搭建服务器
gulp.task("server", function() {
    gulp.src("./dist")
        .pipe(webserver({
            port: 8089,
            host: "localhost",
            // livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url, true).pathname;
                if (pathname === "/favicon.ico") {
                    return;
                }
                if (/\/home/g.test(req.url)) {
                    console.log(req.url);
                    var json = objlist(req.url);
                    res.end(JSON.stringify(json));
                };
                next();
            }
        }));
});


//编译less
gulp.task("testless", function() {
    gulp.src("./src/css/*.less")
        .pipe(less())
        .pipe(mincss("style.min.css"))
        .pipe(gulp.dest("./src/css"))
});

//压缩css
gulp.task("minCss", function() {
    gulp.src("./src/css/*.css")
        .pipe(mincss("style.min.css"))
        .pipe(gulp.dest("./dist/css"))
});


// 变异es6
gulp.task("testEs5", function() {
    gulp.src("./src/js/lib/*.js") //需要编译的文件
        .pipe(babel({
            presets: 'es2015' //指定编译后的版本为es5
        }))
        .pipe(minjs())
        .pipe(gulp.dest("./dist/js/lib"));
});
//压缩js
// gulp.task("minjs", function() {
//     gulp.src("./src/js/index.js")
//         .pipe(minjs())
//         .pipe(gulp.dest("./dist/js"))
// });


gulp.watch("./src/css/*.less", ['testless']);

gulp.task('default', function(cb) {
    sequence("server", "testless", cb)
});