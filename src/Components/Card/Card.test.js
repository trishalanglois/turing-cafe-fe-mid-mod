import Card from './Card';
import React from 'react';
import { shallow } from 'enzyme';

describe('Card', () => {
  it('should match the snapshot with all data passed correctly', () => {
    const wrapper = shallow(<Card
      id={7}
      name='Trisha'
      date='10/22'
      time='11:00'
      number={9}
    />);

    expect(wrapper).toMatchSnapshot();
  })
})
