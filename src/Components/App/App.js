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


  render() {
    return (
      <>
        <Form />
        <ReservationsContainer
          reservations={this.state.allReservations}/>
      </>
    )
  }
}

export default App;
