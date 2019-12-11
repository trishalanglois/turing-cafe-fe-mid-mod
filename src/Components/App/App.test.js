import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  })


//NEEDS ASYNC TESTING FOR FETCH
  // it('should update state when getUpdatedData is called', () => {
  //   const wrapper = shallow(<App />);
  //   const mockOGState = [];
  //   const mockNewState = [{
  //       id: 1,
  //       name: "Christie",
  //       date: "12/29",
  //       time: "7:00",
  //       number: 12
  //   }]
  //
  //   wrapper.setState({reservations: mockOGState});
  //   expect(wrapper.state('reservations')).toEqual(mockOGState);
  //
  //   wrapper.instance().getUpdatedData(mockNewState);
  //   expect(wrapper.state('reservations')).toEqual(mockNewState)
  // })

})
