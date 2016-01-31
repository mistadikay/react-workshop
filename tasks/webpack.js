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

export function webpackDev(resolve, reject) {
    process.env.NODE_ENV = 'development';

    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const clientOnlyDevConfig = require('../conf/webpack.dev').default;
    const portscanner = require('portscanner');

    portscanner.findAPortNotInUse(minPort, maxPort, host, function(error, port) {
        if (error) {
            return reject(error);
        }

        const server = new WebpackDevServer(webpack(clientOnlyDevConfig), {
            hot: true,
            stats: statsOptions
        });

        server.listen(port, err => {
            if (err) {
                return reject(err);
            }

            resolve(`http://${host}:${port}/webpack-dev-server/`);
        });
    });
}

export function webpackBuild(resolve, reject) {
    process.env.NODE_ENV = 'production';

    const webpack = require('webpack');
    const isomorphicBuildServerConfig = require('../conf/webpack.build').default;

    webpack(isomorphicBuildServerConfig, (err, stats) => {
        if (err) {
            return reject(err);
        }

        resolve(stats.toString(statsOptions));
    });
}
