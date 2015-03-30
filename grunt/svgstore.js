module.exports = {
    options: {
        prefix: 'shape-',
        svg: {
            xmlns: 'http://www.w3.org/2000/svg'
        },
        includedemo: true
    },
    default: {
        files: {
            'static/img/sprites.svg': ['static/img/svg/**/*.svg']
        }
    }
};
