import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Button from './index';

describe('<Button />', function () {
    it('should contain text "Click"', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.text()).to.equal("Click");
    });
});
