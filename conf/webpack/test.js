import path from 'path';

import webpackCommonConfig from './';

const testingSources = [
    path.resolve('src/components/')
];

export default {
    ...webpackCommonConfig,
    resolve: {
        ...webpackCommonConfig.resolve,
        alias: {
            ...webpackCommonConfig.resolve.alias,
            test: path.resolve('test'),
            sinon: 'sinon/pkg/sinon'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                include: testingSources,
                loader: 'babel-istanbul',
                query: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.js$/,
                exclude: [
                    ...testingSources,
                    path.resolve('node_modules/')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }
        ],
        loaders: [
            ...webpackCommonConfig.module.loaders,
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css?-minimize',
                    'postcss'
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css?-minimize',
                    'postcss',
                    'less'
                ]
            }
        ],
        noParse: [
            /node_modules\/sinon\//
        ]
    },
    externals: {
        jsdom: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
};
