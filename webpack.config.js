const path = require('path');
const webpack = require('webpack');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const DEV_MODE = process.env.NODE_ENV !== 'production';
const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');
const PUBLIC_DIR = path.join(__dirname, 'public');

const extractSCSS = new MiniCssExtractPlugin({
    filename: MODE !== 'production' ? "[name].css" : "[name].[contenthash].css",
    chunkFilename: MODE !== 'production' ? "[id].css" : "[id].[contenthash].css",
});

const _default = {
    mode: MODE,
    entry: {
        main: APP_DIR + '/index.js',
        vendor: [
            "jquery",
            "popper.js",
            "axios",
            "react",
            "react-dom",
            "react-router",
            "react-router-dom"
        ]
    },
    output: {
        publicPath: '/',
        path: BUILD_DIR,
        filename: '[name].[hash].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                //exclude: /node_modules/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [require('autoprefixer')];
                                },
                                sourceMap: true
                            }
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{ loader: "html-loader" }]
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                exclude: /node_modules/,
                use: [{ loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'assets/bundle' } }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: 'index.html',
            template: PUBLIC_DIR + '/index.html',
            favicon: PUBLIC_DIR + '/favicon.ico'
        }),
        extractSCSS
    ],
    devServer: {
        contentBase: BUILD_DIR,
        host: 'localhost',
        port: PORT,
        historyApiFallback: true,
        open: true,
        hot: true,
        liveReload: true,
        compress: true,
        headers: { 'Access-Control-Allow-Origin': '*' }
    }
};

if (DEV_MODE) {
    // only enable hot in development
    _default.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = _default;