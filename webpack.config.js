const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;
const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');
const PUBLIC_DIR = path.join(__dirname, 'public');

module.exports = {
    mode: 'development',
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader'],
                include: APP_DIR,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: '[name]_[local]_[hash:base64:6]'
                            }
                        }
                    },
                ],
                include: APP_DIR,
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // inject: true,
            // filename: 'app.html',
            template: PUBLIC_DIR + '/index.html',
            favicon: PUBLIC_DIR + '/favicon.ico'
        })
    ],
    devServer: {
        contentBase: PUBLIC_DIR,
        host: 'localhost',
        port: PORT,
        historyApiFallback: true,
        open: true,
        hot: true,
        liveReload: true,
    }
};