import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import { useSelector } from "react-redux";

import styled from "styled-components";
import BookSearch from "../pages/book-search";

const Routes = () => {
  const tokenInfo = useSelector((state) => state.login);

  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>

      {tokenInfo.token && tokenInfo.login_status ? (
        <Route exact path="/timeline"></Route>
      ) : (
        <Route exact path="/timeline">
          <NotAuthorized>NOT Authorized</NotAuthorized>
        </Route>
      )}
      <Route path="/search">
        <BookSearch />
      </Route>
    </Switch>
  );
};

export default Routes;

const NotAuthorized = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
