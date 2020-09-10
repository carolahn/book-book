import React from "react";
import logo from "./assets/images/logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Timeline from "./pages/timeline";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <header className="App">
          <img src={logo} />
        </header>
        <Timeline />
      </Route>
    </Switch>
  );
};

export default App;
