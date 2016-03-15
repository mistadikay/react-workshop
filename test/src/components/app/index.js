import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '#app';

let wrapper = null;

describe('App', () => {
    describe('render', () => {
        beforeEach(() => {
            wrapper = shallow(<App />);
        });

        it('has correct className', function() {
            expect(wrapper).to.have.className('app');
        });

        it('greets me', () => {
            expect(wrapper).to.contain('hello world');
        });
    });
});
