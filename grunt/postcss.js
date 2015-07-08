module.exports = {
    options: {
        map: { inline: true },
        processors: [
            require('autoprefixer-core')(
                { browsers: ['last 2 versions', 'ie 10', 'ie 11'] }
            ),
        ]
    },
    target: {
        expand: true,
        cwd: 'static/css/build',
        src: ['*.css'],
        dest: 'static/css',
        ext: '.css'
    }
};
