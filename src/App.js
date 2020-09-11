import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Header from "./components/header/";
import Register from "./pages/register";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

export default App;
