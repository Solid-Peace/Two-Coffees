const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let dev = process.env.NODE_ENV === "dev";


module.exports = {
    watch: dev,
    mode: "none",
    devtool: 'eval-cheap-source-map',

    entry: {
        app: './src/index.js',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        library: 'lib',
    },

    resolve: {
        alias: {
            Images: path.resolve(__dirname, 'public/assets/imgs/'),
            CSS: path.resolve(__dirname, 'public/assets/css/'),
            JS: path.resolve(__dirname, 'public/assets/js/'),
        }
    },

    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtract.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images',
                        name: '[name].[ext]',
                    }
                }
            },
        ],
    },

    plugins: [
        new NodemonPlugin({

            script: './src/server/server.js',
            watch: [path.resolve('./src/server'), /* path.resolve('./public') */],
            ignore: ['*.js.map'],
            verbose: true,

            ext: 'js,json,html',
        }),

        // This makes it possible for us to safely use env vars on our code
        new webpack.DefinePlugin({
            'MODE': JSON.stringify(dev),
            'webpack': JSON.stringify(webpack),
        }),

        new MiniCssExtract({
            filename: '[name].css',
            hmr: dev,
        }),

        // Vue Plugin 
        new VueLoaderPlugin(),
    ]
}