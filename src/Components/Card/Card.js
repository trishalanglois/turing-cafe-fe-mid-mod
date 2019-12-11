import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number }) => {
  return (
    <article>
      <p>Name: {name}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Number: {number}</p>
    </article>
  )
}

export default Card;
