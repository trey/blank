module.exports = {
    options: {
        sourceMap: true,
        plugins: ['transform-react-jsx'],
        presets: ['es2015', 'react']
    },
    jsx: {
        files: [{
            expand: true,
            cwd: 'src/js',
            src: [
                '**/*.jsx',
                '**/*.js'
            ],
            dest: 'dist/js',
            ext: '.js'
        }]
    }
};
