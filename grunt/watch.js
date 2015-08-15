module.exports = {
    options: {
        livereload: true,
    },
    html: {
        files: ['src/**/*.html'],
        tasks: ['copy']
    },
    js: {
        files: ['dist/static/js/**/*.js'],
        tasks: ['jshint']
    },
    jsx: {
        files: ['src/static/js/jsx/**/*.jsx'],
        tasks: ['react']
    },
    sass: {
        options: {
            // Monitor Sass files for changes and compile them,
            //but don't reload the browser.
            livereload: false,
        },
        files: ['src/static/css/scss/**/*.scss'],
        tasks: ['scsslint', 'sass']
    },
    css: {
        // LiveReload on the CSS files instead of their Sass source files and
        // get the style to refresh without reloading the page in the browser.
        files: ['src/static/css/**/*.css'],
        tasks: ['postcss']
    },
    svg: {
        files: ['src/static/img/svg/**/*.svg'],
        tasks: ['svgstore', 'svgmin']
    },
    images: {
        files: ['src/static/img/**/*.{png,jpg,gif}'],
        tasks: ['imagemin']
    }
};
