import React from "react";
import "./Todo.css";

function Person({ person }) {
  const { name, gender, birth_year } = person;

  return (
    <div className="itm"> 
      <h3>{name}</h3>
      <p>Gender- {gender}</p>
      <p>Birth- {birth_year}</p>
    </div>
  );
}

export default Person;
