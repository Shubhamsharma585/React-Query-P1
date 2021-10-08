import React, {useState} from "react";
import "./Todo.css";
import Planet from "./Planet";
import { useQuery } from "react-query";

const fetch1 = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

  


function Home() {
  const { data, status, refetch } = useQuery("planets", fetch1);
  console.log(data)

  const [k, setK] = useState(false)

  const cc = () => {
    setK(k => !k) 
  }

  return(
    <div>
      <h2>Planets</h2>
      <h2 onClick={() => refetch()}>Refetch</h2>
      {status === "loading" && (
        <div>Loading data...</div>
      )}

{status === "error" && (
        <div>Error Loading data...</div>
      )}

{status === "success" && (
        <div>{
          data.results.map(planet => <Planet key={planet.name} planet={planet} />)
        }</div>
      )}


<button onClick={() => cc()}>{k?"dss":"no"}</button>


    </div>
  );
}

export default Home;
