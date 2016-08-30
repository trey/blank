module.exports = {
    options: {
        configFile: '.sass-lint.yml',
    },
    target: [
        'src/css/**/*.scss',
        '!src/css/vendors/*.scss',
        '!src/css/base/_reset.scss'
    ]
};
