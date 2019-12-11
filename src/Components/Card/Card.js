import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number, removeReservation }) => {
  return (
    <article>
      <h3>{name}'s Reservation</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number: {number}</p>
      <button className="cancel-button">Cancel</button>
    </article>
  )
}

export default Card;
