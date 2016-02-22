import Start from 'start';
import reporter from 'start-pretty-reporter';
import clean from 'start-clean';
import eslint from 'start-eslint';
import files from 'start-files';

import * as webpack from './webpack';
import stylelint from './stylelint';
import csscomb from './csscomb';

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
        files('build/'),
        clean(),
        webpack.build()
    );
}

export function dev() {
    return start(
        webpack.dev()
    );
}
