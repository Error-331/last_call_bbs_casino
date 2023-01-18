const path = require('path');
const AxiomCompilationPlugin = require('./axiom_compilation_plugin_class');

module.exports = {
    watch: true,
    context: path.resolve(__dirname, './../'),

    target: ['web', 'es5'],
    entry: './src/index.js',

    watchOptions: {
        ignored: /dist/,
    },

    resolve: {
        extensions: ['.js', '.json'],
    },

    output: {
        iife: false,

        path: path.resolve(__dirname, '../dist'),
        filename: 'library.js',

        publicPath: '/',

        library: {
            name: 'library',
            type: 'var'
        }
    },

    optimization: {
        minimize: false
    },

    module: {
        rules: [
            {
                test: /\.(js)?$/,
                use: [{loader: 'babel-loader', options: {compact: false}}],
            },
        ],
    },

    plugins: [
        new AxiomCompilationPlugin({
            outputFilePath: '/home/sergei/.local/share/Last Call BBS/76561198097682720/servers/casino.js',
        }),
    ],
};