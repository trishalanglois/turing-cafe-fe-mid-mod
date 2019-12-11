import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allReservations: []
    }
  }

    componentDidMount() {
      fetch('http://localhost:3001/api/v1/reservations')
        .then(response => response.json())
        .then(data =>
          this.setState({
            allReservations: data
          })
        )

    }

    getUpdatedData() {
      fetch('http://localhost:3001/api/v1/reservations')
        .then(response => response.json())
        .then(data =>
          this.setState({
            allReservations: data
          })
        )
    }

    submitReservation = (reservation) => {
      this.setState({
        allReservations: [...this.state.allReservations, reservation]
      })
      fetch('http://localhost:3001/api/v1/reservations', {
      	method: 'POST',
      	headers: {
      		'Content-Type': 'application/json'
      	},
      	body: JSON.stringify({...reservation, id: Date.now()}),
      })
      	.then(response => response.json())
        .then(data => console.log(data))
      	.catch(error => console.log(error))
      this.getUpdatedData();
    }

    removeReservation = (event) => {
      console.log('cancel button has been clicked');
    }

    render() {
      return (
        <div className="App">
          <h1 className='app-title'>Turing Cafe Reservations</h1>
          <div className='resy-form'>
            <Form submitReservation={this.submitReservation}/>
          </div>

          <div className='resy-container'>
          <ReservationsContainer
            reservations={this.state.allReservations}/>
          </div>

        </div>
  )}
}

export default App;
