const path = require('path'),
    HTMLplugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'App.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins :[
        new HTMLplugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ],
};