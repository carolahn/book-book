/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Login from "../pages/login";
import Register from "../pages/register";
import Timeline from "../pages/timeline/";
import Shelves from "../pages/shelves";
import Profile from "../pages/profile";
import BookSearch from "../pages/book-search";
import { requestUserBooks } from "../redux/actions/user-books";

import styled from "styled-components";

const Routes = () => {
  const tokenInfo = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    tokenInfo.id && dispatch(requestUserBooks(tokenInfo.token, tokenInfo.id));
  }, [tokenInfo.id]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>

        {tokenInfo.token ? (
          <>
            <Route path="/my-shelves/">
              <Shelves />
            </Route>
            <Route exact path="/search">
              <BookSearch />
            </Route>
            <Route exact path="/timeline">
              <Timeline />
            </Route>
            <Route path="/profile/:id">
              <Profile />
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
            <Route path="/profile">
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
