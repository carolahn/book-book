import React from "react";
import logo from "./assets/images/logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Book from "./components/book";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} />
            <Book />
          </header>
        </div>
      </Route>
    </Switch>
  );
};

export default App;
