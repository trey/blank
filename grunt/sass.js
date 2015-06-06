module.exports = {
    dist: {
        options: {
            outputStyle: 'nested'
        },
        files: [{
            expand: true,
            cwd: 'static/css/scss',
            src: ['*.scss'],
            dest: 'static/css/build',
            ext: '.css'
        }]
    }
};
