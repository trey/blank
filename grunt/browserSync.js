module.exports = {
    dev: {
        bsFiles: {
            src: 'static/css/**/*.css'
        },
        options: {
            watchTask: true,
            files: [
                '!static/css/build/**/*.css',
                'static/css/**/*.css',
                'static/js/**/*.js',
                '*.html'
            ],
            open: false,
            proxy: 'localhost:8000'
        }
    }
};
