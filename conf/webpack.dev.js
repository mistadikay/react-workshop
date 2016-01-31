import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackCommonConfig from './webpack.common';

export default {
    ...webpackCommonConfig,
    entry: [
        'webpack/hot/dev-server',
        './src/index'
    ],
    output: {
        ...webpackCommonConfig.output,
        path: path.resolve('./'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: '#cheap-module-eval-source-map',
    module: {
        ...webpackCommonConfig.module,
        loaders: [
            ...webpackCommonConfig.module.loaders,
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'images/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?-minimize',
                    'postcss'
                ]
            }
        ]
    },
    plugins: [
        ...webpackCommonConfig.plugins,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({ template: 'src/assets/index.html' })
    ]
};
