import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import webpackCommonConfig from './';

export default {
    ...webpackCommonConfig,
    output: {
        ...webpackCommonConfig.output,
        path: path.resolve('./build/'),
        filename: 'js/[name].js'
    },
    entry: {
        vendor: [
            'react',
            'react-dom'
        ],
        app: './src/index'
    },
    module: {
        ...webpackCommonConfig.module,
        loaders: [
            ...webpackCommonConfig.module.loaders,
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 50000,
                    name: 'images/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?-minimize&sourceMap' +
                    'postcss'
                )
            }
        ]
    },
    plugins: [
        ...webpackCommonConfig.plugins,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/[name].js'),
        new ExtractTextPlugin('css/[name].css', { allChunks: true }),
        new HtmlWebpackPlugin({ template: 'src/assets/index.html' }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ],
    profile: true
};
