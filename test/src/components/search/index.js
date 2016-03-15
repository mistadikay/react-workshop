import React from 'react';
import { expect } from 'chai';
import { shallow } from 'rebem-enzyme';

import Search from '#search';

let wrapper = null;

describe('Search', () => {
    describe('render', () => {
        beforeEach(() => {
            wrapper = shallow(<Search />);
        });

        it('is a search block', function() {
            expect(wrapper).to.be.block('search');
        });

        it('has one input element', () => {
            expect(wrapper.findBEM({ block: 'search', elem: 'input' })).to.have.length(1);
        });
    });
});
