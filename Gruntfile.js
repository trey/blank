module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          open: true,
        },
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'css/scss/main.scss',
        }
      }
    },
    jshint: {
      files: ['js/*.js'],
    },
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['index.html'],
      },
      js: {
        files: ['js/**/*.js'],
        tasks: ['jshint'],
      },
      sass: {
        options: {
          // Monitor Sass files for changes and compile them, but don't reload the browser.
          livereload: false,
        },
        files: ['css/scss/**/*.scss'],
        tasks: ['sass'],
      },
      css: {
        // LiveReload on the CSS files instead of their Sass source files and you get
        // the style to refresh without reloading the page in the browser.
        files: ['css/**/*.css'],
      },
    },
  });

  // Actually running things.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-notify');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);

};
