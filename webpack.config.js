const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3000;
const MODE = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');
const PUBLIC_DIR = path.join(__dirname, 'public');

module.exports = {
    mode: MODE,
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
                exclude: /(node_modules)/
            },
            {
                test: /\.s[ac]ss|css$/i,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                        // `postcssOptions` is needed for postcss 8.x;
                        // if you use postcss 7.x skip the key
                        postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }]
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
        contentBase: BUILD_DIR,
        host: 'localhost',
        port: PORT,
        historyApiFallback: true,
        open: true,
        hot: true,
        liveReload: true,
        headers: {'Access-Control-Allow-Origin': '*'}
    }
};