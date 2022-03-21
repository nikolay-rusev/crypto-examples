const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        bundle: ['/src/app.ts'],
    },
    output: {
        path: __dirname + '/public',
        filename: 'app.js',
        publicPath: '',
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js'],
        fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader',
            },
        ],
    },
};
