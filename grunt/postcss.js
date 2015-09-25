module.exports = {
    options: {
        map: { inline: true },
        processors: [
            require('autoprefixer')(
                { browsers: ['last 2 versions'] }
            ),
        ]
    },
    target: {
        expand: true,
        cwd: 'src/static/css/build',
        src: ['*.css'],
        dest: 'src/static/css',
        ext: '.css'
    }
};
