import chai from 'chai';
import BEM from 'chai-bem';
import chaiSpies from 'chai-spies';
import chaiColors from 'chai-colors';
import chaiAsPromised from 'chai-as-promised';
import chaiEnzyme from 'chai-enzyme';

import { ShallowWrapper, ReactWrapper } from 'enzyme';

chai.use(BEM({
    entityHook(entity) {
        if (entity instanceof ShallowWrapper || entity instanceof ReactWrapper) {
            return entity.prop('className');
        }

        return entity;
    }
}));
chai.use(chaiSpies);
chai.use(chaiColors);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme((wrapper) => {
    return wrapper.wrapper.debug();
}));

// https://github.com/webpack/karma-webpack#alternative-usage

// components
const componentsTests = require.context('./src/components/', true, /\.js$/);
const componentsSources = require.context('../src/components/', true, /\.js$/);

componentsTests.keys().forEach(componentsTests);
componentsSources.keys().forEach(componentsSources);
