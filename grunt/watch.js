module.exports = {
  options: {
    livereload: true,
  },
  html: {
    files: ['index.html'],
  },
  js: {
    files: ['static/js/**/*.js'],
    tasks: ['jshint'],
  },
  sass: {
    options: {
      // Monitor Sass files for changes and compile them,
      // but don't reload the browser.
      livereload: false,
    },
    files: ['static/css/scss/**/*.scss'],
    tasks: ['sass'],
  },
  css: {
    // LiveReload on the CSS files instead of their Sass source files and you
    // get the style to refresh without reloading the page in the browser.
    files: ['static/css/**/*.css'],
  },
  svg: {
    files: ['static/img/svg/**/*.svg'],
    tasks: ['svgstore']
  }
};
