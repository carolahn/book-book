import React from "react";
import "./App.css";
import Header from "./components/header/";
import Routes from "./routes";
import Footer from './components/footer';

import styled from "styled-components";

const App = () => {
  return (
    <StyledDiv>
      <Header />
      <Routes />
      <Footer />
    </StyledDiv>
  );
};

export default App;

const StyledDiv = styled.div`
  margin: 0;
  height: 100vh;
`;