module.exports = {
    dev: {
        bsFiles: {
            src: 'dist/static/css/**/*.css'
        },
        options: {
            watchTask: true,
            files: [
                'dist/static/css/**/*.css',
                'dist/static/js/**/*.js',
                'dist/*.html'
            ],
            open: false,
            proxy: 'localhost:8000'
        }
    }
};
