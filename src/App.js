import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Header from "./components/header/";
import Timeline from "./pages/timeline";
import Register from "./pages/register";
import Test from "./pages/TEST";
const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <Login />
      </Route>
      <Route exact path="/register">
        <Header />
        <Register />
      </Route>
      <Route path="/timeline">
        <Timeline />
      </Route>
      <Route path="/testing-reducers">
        <Test />
      </Route>
    </Switch>
  );
};

export default App;
