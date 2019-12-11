import React from 'react';
import './ReservationsContainer.css';
import Card from '../Card/Card'


const ReservationsContainer = ({ reservations }) => {

  return reservations.map(reservation => {
    return (
      <Card
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )

  })
}

export default ReservationsContainer;