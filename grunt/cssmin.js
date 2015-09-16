module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'src/static/css',
            src: ['*.css'],
            dest: 'dist/static/css',
            ext: '.css'
        }]
    }
};
