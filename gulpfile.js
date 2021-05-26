const { task, series, watch } = require("gulp");
const sass = require("./tasks/sass");
const images = require("./tasks/images");

task("watch", () => {
    watch("./src/scss/**/*.scss", sass)
    watch("./src/images/**/*", images)
})

exports.watch = series("watch")
exports.default = series(sass, images)