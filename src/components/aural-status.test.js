import React from 'react';
import {shallow,mount} from 'enzyme';
import AuralStatus from './aural-status';

describe('AuralStatus', () => {
  it('Should render without crashing', () => {
    shallow(<AuralStatus />)
  });


  it('Should display a aural status', () => {
    const wrapper = shallow(<AuralStatus auralStatus={'test'}/>);
    expect(wrapper.contains('test')).toEqual(true);
  });

});
