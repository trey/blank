module.exports = {
    main: {
        files: [
            {
                expand: true,
                cwd: 'src',
                src: '**/*.html',
                dest: 'dist/'
            },
            {
                expand: true,
                cwd: 'bower_components',
                src: '**/*.*',
                dest: 'dist/static/bower_components/'
            }
        ]
    }
};
