import axios from "axios";
import LOGIN_ACTIONS from "./login-action-types";
import { requestUserBooks } from "../user-books";

const login_successeful = (username = "", token = "", id = "") => {
  return {
    type: LOGIN_ACTIONS.LOGIN_SUCCESSFUL,
    username,
    token,
    id,
  };
};

const login_unssuccessfull = (error) => {
  return {
    type: LOGIN_ACTIONS.LOGIN_UNSUCCESSFUL,
    error,
  };
};

export const login = (username, password) => async (dispatch) => {
  await axios({
    method: "post",
    url: "https://ka-users-api.herokuapp.com/authenticate",
    data: {
      user: username,
      password: password,
    },
  })
    .then((response) => {
      dispatch(
        login_successeful(
          username,
          response.data.auth_token,
          response.data.user.id
        )
      );
      dispatch(
        requestUserBooks(response.data.auth_token, response.data.user.id)
      );
    })
    .catch((err) => dispatch(login_unssuccessfull(err)));
};

const login_logout = () => {
  return {
    type: LOGIN_ACTIONS.LOGOUT,
  };
};

export const logout = () => (dispatch) => {
  dispatch(login_logout());
};
