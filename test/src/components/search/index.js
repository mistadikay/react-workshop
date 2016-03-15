import React from 'react';
import { expect, spy } from 'chai';
import { shallow } from 'rebem-enzyme';

import Search from '#search';
import Input from '#input';

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

    describe('events', function() {
        it('onChange is working', function() {
            const onChangeSpy = spy();
            const value = { target: { value: 'test-value' } };

            wrapper = shallow(<Search onChange={onChangeSpy} />);
            wrapper.find(Input).simulate('change', value);

            expect(onChangeSpy).to.have.been.called.once;
            expect(onChangeSpy).to.have.been.called.with(value);
        });
    });
});
