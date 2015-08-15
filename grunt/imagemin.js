module.exports = {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'src/static/img',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/static/img'
        }]
    }
};
