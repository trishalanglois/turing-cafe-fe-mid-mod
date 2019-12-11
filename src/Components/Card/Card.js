import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number }) => {
  return (
    <article>
      <h3>{name}'s Reservation</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number: {number}</p>
    </article>
  )
}

export default Card;
