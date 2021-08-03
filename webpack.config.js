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
                test: /\.s[ac]ss|css$/i,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        modules: {
                            localIdentName: '[name]_[local]_[hash:base64:6]'
                        }
                    }
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
        contentBase: PUBLIC_DIR,
        host: 'localhost',
        port: PORT,
        historyApiFallback: true,
        open: true,
        hot: true,
        liveReload: true,
    }
};