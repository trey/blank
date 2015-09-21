module.exports = {
    options: {
        sourceMap: true
    },
    files: {
        expand: true,
        cwd: 'src/static/js',
        src: [
            '**/*.jsx',
            '**/*.js'
        ],
        dest: 'dist/static/js',
        ext: '.js'
    }
};
