module.exports = {
    dist: {
        options: {
            outputStyle: 'nested'
        },
        files: [{
            expand: true,
            cwd: 'src/static/css/scss',
            src: ['*.scss'],
            dest: 'src/static/css',
            ext: '.css'
        }]
    }
};
