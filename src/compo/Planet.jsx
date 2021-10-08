import React from "react";
import "./Todo.css";

function Planet({ planet }) {
  const { name, population, terrain } = planet;

  return (
    <div className="itm">
      <h3>{name}</h3>
      <p>Pop- {population}</p>
      <p>ter- {terrain}</p>
    </div>
  );
}

export default Planet;
