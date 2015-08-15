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
            'dist/static/img/sprites.svg': ['src/static/img/svg/**/*.svg']
        }
    }
};
