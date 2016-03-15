import React from 'react';
import { expect } from 'chai';
import { shallow } from 'rebem-enzyme';

import App from '#app';

let wrapper = null;

describe('App', () => {
    describe('render', () => {
        beforeEach(() => {
            wrapper = shallow(<App />);
        });

        it('is an app block', function() {
            expect(wrapper).to.be.block('app');
        });

        it('has loader by default', () => {
            expect(wrapper).to.have.mods({ loading: true });
        });
    });
});
