const { dest, src } = require("gulp");

const cleanCSS = require("gulp-clean-css");
const sassProcessor = require("gulp-sass");

sassProcessor.compiler = require("sass");

const isProduction = process.env.NODE_ENV === "production";

const sass = () => {
  return src("./src/scss/*.scss")
    .pipe(sassProcessor())
    .on("error", sassProcessor.logError)
    .pipe(cleanCSS(isProduction ? { level: 2 } : {}))
    .pipe(dest("./dist/css", { sourceMaps: !isProduction }));
};

module.exports = sass;