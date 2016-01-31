import Start from 'start';
import logger from 'start-simple-logger';
import clean from 'start-clean';
import eslint from 'start-eslint';

import { webpackDev, webpackBuild } from './webpack';

const start = Start(logger);

export function lint() {
    return start(eslint());
}

export function build() {
    return start(
        clean('build/'),
        webpackBuild
    );
}

export function dev() {
    return start(webpackDev);
}
