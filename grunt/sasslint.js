module.exports = {
    options: {
        configFile: '.sass-lint.yml',
    },
    target: [
        'src/static/css/**/*.scss',
        '!src/static/css/vendors/*.scss',
        '!src/static/css/base/_reset.scss'
    ]
};
