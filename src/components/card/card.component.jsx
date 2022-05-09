import { Component } from "react";
import "./card.styles.css";

const Card = ({ name, email, id, className }) => (
  <div className={`card-container ${className}`} key={id}>
    <img
      alt={`card ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
