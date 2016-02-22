import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

export default {
    cache: true,
    stats: {
        colors: true,
        reasons: false
    },
    output: {
        pathinfo: true
    },
    resolve: {
        alias: {
            '~': path.resolve('src/')
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('node_modules/')
                ],
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    postcss() {
        return [
            autoprefixer({
                browsers: [
                    'last 2 Chrome versions',
                    'last 2 Firefox versions',
                    'last 2 Safari versions',
                    'last 2 Explorer versions'
                ]
            })
        ];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                LOCAL_IP: JSON.stringify('127.0.0.1'),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
