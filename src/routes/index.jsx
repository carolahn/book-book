import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/login";
import Register from "../pages/register";
import Timeline from "../pages/timeline/";
import Shelves from "../pages/shelves";
import Perfil from "../pages/perfil";

import styled from "styled-components";

const Routes = () => {
  const tokenInfo = useSelector((state) => state.login);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        {tokenInfo.token || tokenInfo.login_status ? (
          <>
            <Route path="/my-shelves/">
              <Shelves />
            </Route>
            <Route exact path="/search"></Route>
            <Route exact path="/timeline">
              <Timeline />
            </Route>
            <Route path="/perfil/:id">
              <Perfil />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/my-shelves">
              <NotAuthorized>NOT Authorized</NotAuthorized>
            </Route>
            <Route exact path="/search">
              <NotAuthorized>NOT Authorized</NotAuthorized>
            </Route>
            <Route exact path="/timeline">
              <NotAuthorized>NOT Authorized</NotAuthorized>
            </Route>
            <Route path="/perfil">
              <NotAuthorized>NOT Authorized</NotAuthorized>
            </Route>
          </>
        )}
      </Switch>
    </>
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
