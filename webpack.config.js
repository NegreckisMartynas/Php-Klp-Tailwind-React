const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'static'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            }
        ]
    }
};