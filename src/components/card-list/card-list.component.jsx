import { Component } from "react";
import Card from "../card/card.component.jsx";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { name, email, id } = monster;
      return (
        <Card
          key={id}
          name={name}
          email={email}
          id={id}
          className="monster-card"
        />
      );
    })}
  </div>
);

export default CardList;
