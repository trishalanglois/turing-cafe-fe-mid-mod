import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  sendReservation = (event) => {
    let newReservation = {...this.state};
    this.props.submitReservation(newReservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: null
    })
  }

  render() {
    return (
      <div className="reservation-form">

        <h2>Make a reservation</h2>
        <p>Name</p>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

        <p>Date</p>
        <input type="text" name="date" value={this.state.date} placeholder="MM/DD" onChange={this.handleChange} />

        <p>Time</p>
        <input type="text" name="time" value={this.state.time} placeholder="HH:MM" onChange={this.handleChange} />

        <p>Number of Guests</p>
        <input type="number" name="number" value={this.state.number} onChange={this.handleChange} />
        <br />
        <button className="form-button" onClick={this.sendReservation}>Submit</button>

      </div>
    )
  }
}


export default Form;
