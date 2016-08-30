module.exports = {
    dist: {
        options: {
            outputStyle: 'nested'
        },
        files: [{
            expand: true,
            cwd: 'src/css',
            src: ['*.scss'],
            dest: 'src/css/build',
            ext: '.css'
        }]
    }
};
