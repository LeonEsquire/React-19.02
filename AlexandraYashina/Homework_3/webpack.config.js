const path = require('path');
HTMLplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/App.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }, ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ],
};