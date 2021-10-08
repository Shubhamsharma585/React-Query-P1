import React, { useState, useEffect, useRef } from "react";
import "./Todo.css";
import Axios from "axios";
import Person from "./Person";
import { useQuery } from "react-query";

const fetchtodos = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

function Todo() {

  const { data, status } = useQuery("people", fetchtodos);
  console.log(data)


  return (
    <div>
     

     <h2>Person</h2>
      {status === "loading" && (
        <div>Loading data...</div>
      )}

{status === "error" && (
        <div>Error Loading data...</div>
      )}

{status === "success" && (
        <div>{
          data.results.map(person => <Person key={person.name} person={person} />)
        }</div>
      )}


    </div>
  );
}

export default Todo;

// useEffect(() => {
//   mountedRef.current = true;

//   Axios.get("http://json-heroku-shubham.herokuapp.com/todo", {})
//     .then((res) => {
//       if (mountedRef.current) {
//         setTodos(res.data);
//         setFetcha(false);
//       }
//     })
//     .catch((e) => {
//       console.log(e);
//     });

//   return () => {
//     mountedRef.current = false;
//   };
// }, [fetcha]);
