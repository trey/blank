module.exports = {
    options: {
        plugins: [
            { cleanupIDs: false }
        ]
    },
    dist: {
        files: {
            'static/img/sprites.svg': 'static/img/sprites.svg'
        }
    }
};
