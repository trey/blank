module.exports = {
    dist: {
        options: {
            style: 'compressed'
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
