module.exports = {
  options: {
    browsers: ['last 2 versions', 'ie 10', 'ie 11']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src:  'static/css/build/**/*.css',
    dest: 'static/css/'
  },
  sourcemap: {
    options: {
      map: true
    },
    src:  'static/css/build/main.css',
    dest: 'static/css/main.css'
  }
};
