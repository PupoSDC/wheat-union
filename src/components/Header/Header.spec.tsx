import React from 'react';
import Header from './Header';
import {InputBase} from '@material-ui/core';
import {shallow} from 'enzyme';


describe('Header', () => {
  it('renders without crashing', () => {
    const searchKey = 'searchKey';
    const setSearchKey = jest.fn();

    const wrapper = shallow(<Header searchKey={searchKey} setSearchKey={setSearchKey} />);
    expect(wrapper.find(InputBase).prop("value")).toEqual(searchKey);
  });
});