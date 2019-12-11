import Form from './Form';
import React from 'react';
import { shallow } from 'enzyme';

describe('Form', () => {
  it('should match the snapshot with all data passed correctly', () => {
    const wrapper = shallow(<Form
      submitReservation={jest.fn()}
    />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when clearInputs is called', () => {
    const wrapper = shallow(<Form />);
    const mockState = {
      user: 'Trisha',
      date: '10/10',
      time: '10:10',
    };
    const mockClearedState = {
      user: '',
      date: '',
      time: '',
    };

    wrapper.instance().setState({ user: 'Trisha', date: '10/10', time: '10:10', number: 10})
    expect(wrapper.state('user')).toEqual('Trisha');
    expect(wrapper.state('date')).toEqual('10/10');
    expect(wrapper.state('time')).toEqual('10:10');
  })

  it('should call the submitReservation with the newReservation when the button is clicked', () => {
    const mockClick = jest.fn();
    const wrapper = shallow(<Form
      submitReservation={mockClick}
    />)

    wrapper.find('button').simulate('click');
    expect(mockClick).toHaveBeenCalled()
  })

})
