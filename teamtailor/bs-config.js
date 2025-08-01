const browserSync = require('browser-sync').create();

browserSync.init({
  server: {
    baseDir: "./" // This serves your root folder, where index.html is
  },
  files: [
    "**/*.html",
    "**/*.css",
    "**/*.scss",
    "**/*.js"
  ],
  notify: false,
  open: true
});