module.exports = {
    dev: {
        bsFiles: {
            src: 'dist/css/**/*.css'
        },
        options: {
            watchTask: true,
            files: [
                'dist/css/**/*.css',
                'dist/js/**/*.js',
                'dist/*.html'
            ],
            open: false,
            proxy: 'localhost:8000'
        }
    }
};
