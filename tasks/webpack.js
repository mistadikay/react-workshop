const statsOptions = {
    colors: true,
    children: false,
    assets: false,
    version: false,
    hash: false,
    chunkModules: false
};
const host = '127.0.0.1';
const minPort = 3000;
const maxPort = 3010;

export const dev = params => input => {
    return function webpackDev(log) {
        process.env.NODE_ENV = 'development';

        const webpack = require('webpack');
        const WebpackDevServer = require('webpack-dev-server');
        const clientOnlyDevConfig = require('../conf/webpack.dev').default;
        const portscanner = require('portscanner');

        return new Promise(function(resolve, reject) {
            portscanner.findAPortNotInUse(minPort, maxPort, host, function(error, port) {
                if (error) {
                    return reject(error);
                }

                const server = new WebpackDevServer(webpack(clientOnlyDevConfig), {
                    hot: true,
                    stats: statsOptions
                });

                log(`http://${host}:${port}/webpack-dev-server/`);

                server.listen(port, err => {
                    if (err) {
                        return reject(err);
                    }

                    resolve(input);
                });
            });
        });
    };
};

export const build = params => input => {
    return function webpackBuild(log) {
        process.env.NODE_ENV = 'production';

        const webpack = require('webpack');
        const isomorphicBuildServerConfig = require('../conf/webpack.build').default;

        return new Promise(function(resolve, reject) {
            webpack(isomorphicBuildServerConfig, (err, stats) => {
                if (err) {
                    return reject(err);
                }

                log(stats.toString(statsOptions));
                resolve(input);
            });
        });
    };
};
