module.exports = {
    options: {
        livereload: true,
    },
    html: {
        files: ['src/**/*.html'],
        tasks: ['copy']
    },
    jsx: {
        files: [
            'src/static/js/**/*.js',
            'src/static/js/**/*.jsx'
        ],
        tasks: ['eslint', 'babel']
    },
    sass: {
        options: { livereload: false },
        files: ['src/static/css/**/*.scss'],
        tasks: ['sasslint', 'sass']
    },
    css: {
        options: { livereload: false },
        files: ['src/static/css/build/**/*.css'],
        tasks: ['postcss']
    },
    cssmin: {
        // LiveReload only on the final CSS files instead of their Sass or build
        // steps and get the style to refresh without reloading the page in the
        // browser.
        files: [
            'src/static/css/**/*.css',
            '!src/static/css/build/**/*.css'
        ],
        tasks: ['cssmin']
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
