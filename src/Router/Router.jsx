import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../compo/Home";
import Todo from "../compo/Todo";
import "../compo/Todo.css";

function Router() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Link to="/home" style={{ textDecoration: "none", color: "yellow" }}>
          <h3
            style={{
              border: "1px solid gray",
              borderRadius: "25px",
              padding: "15px",
            }}
            className="btn"
          >
            Home
          </h3>
        </Link>


        <Link to="/todo" style={{ textDecoration: "none", color: "yellow" }}>
          <h3
            style={{
              border: "1px solid gray",
              borderRadius: "25px",
              padding: "15px",
            }}
            className="btn"
          >
            ToDo
          </h3>
        </Link>
      </div>

      <Switch>
        <Route path="/home" exact>
          <Home />
        </Route>

        <Route path="/todo" exact>
          <Todo />
        </Route>
      </Switch>
    </div>
  );
}

export default Router;
