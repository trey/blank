module.exports = {
    options: {
        sourceMap: true,
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
    },
    jsx: {
        files: [{
            expand: true,
            cwd: 'src/static/js',
            src: [
                '**/*.jsx',
                '**/*.js'
            ],
            dest: 'dist/static/js',
            ext: '.js'
        }]
    }
};
