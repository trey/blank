module.exports = {
    options: {
        plugins: [
            { cleanupIDs: false }
        ]
    },
    dist: {
        files: {
            'dist/static/img/sprites.svg': 'dist/static/img/sprites.svg'
        }
    }
};
