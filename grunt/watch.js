module.exports = {
    options: {
        livereload: true,
    },
    html: {
        files: ['index.html'],
    },
    js: {
        files: ['static/js/**/*.js'],
        tasks: ['jshint']
    },
    jsx: {
        files: ['static/js/jsx/**/*.jsx'],
        tasks: ['react']
    },
    sass: {
        options: {
            // Monitor Sass files for changes and compile them,
            //but don't reload the browser.
            livereload: false,
        },
        files: ['static/css/scss/**/*.scss'],
        tasks: ['scsslint', 'sass']
    },
    css: {
        // LiveReload on the CSS files instead of their Sass source files and
        // get the style to refresh without reloading the page in the browser.
        files: ['static/css/build/**/*.css'],
        tasks: ['postcss']
    },
    svg: {
        files: ['static/img/svg/**/*.svg'],
        tasks: ['svgstore', 'svgmin']
    }
};
