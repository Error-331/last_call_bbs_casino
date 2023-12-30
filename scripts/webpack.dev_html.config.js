const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    target: 'web',
    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
    },

    entry: {
        main: './src/html_test_index.js',
    },

    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: '[name].bundle.js',

        publicPath: '/'
    },

    module: {
        rules: [],
    },

    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './src/html_test_index.html'
        })
    ],
};