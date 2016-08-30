module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: 'src/css',
            src: ['*.css'],
            dest: 'dist/css',
            ext: '.css'
        }]
    }
};
