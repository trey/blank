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
        cwd: 'src/css/build',
        src: ['*.css'],
        dest: 'src/css',
        ext: '.css'
    }
};
