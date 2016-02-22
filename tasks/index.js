import Start from 'start';
import reporter from 'start-pretty-reporter';
import clean from 'start-clean';
import eslint from 'start-eslint';
import files from 'start-files';
import env from 'start-env';
import * as webpack from 'start-webpack';

import findPort from './port';
import stylelint from './stylelint';
import csscomb from './csscomb';

const minPort = 3000;
const maxPort = 3010;
const start = Start(reporter());

export function lint() {
    return start(
        files('**/*.js'),
        eslint(),
        files('**/*.css'),
        stylelint({
            formatter: 'string'
        })
    );
}

export function comb() {
    return start(
        files('**/*.css'),
        csscomb({
            config: 'zen'
        })
    );
}

export function build() {
    return start(
        env('production'),
        files('build/'),
        clean(),
        webpack.build(require('../conf/webpack.build').default)
    );
}

export function dev() {
    return start(
        env('development'),
        findPort({ minPort, maxPort }, port => start(
            webpack.dev(require('../conf/webpack.dev').default, port)
        ))
    );
}
