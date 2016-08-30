module.exports = {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'src/img',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img'
        }]
    }
};
