import axios from "axios";
import LOGIN_ACTIONS from "./login-action-types";
import { requestUserBooks } from "../user-books";
import { requestReviews } from "../reviews-list";

const login_successeful = (userId = "", username = "", token = "") => {
  return {
    type: LOGIN_ACTIONS.LOGIN_SUCCESSFUL,
    userId,
    username,
    token,
  };
};

const login_unssuccessfull = (error_message) => {
  return {
    type: LOGIN_ACTIONS.LOGIN_UNSUCCESSFUL,
    error_message,
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
          response.data.user.id,
          username,
          response.data.auth_token
        )
      );
      dispatch(
        requestUserBooks(response.data.auth_token, response.data.user.id)
      );
      dispatch(requestReviews(response.data.auth_token));
    })
    .catch((err) => dispatch(login_unssuccessfull("Invalid credentials")));
};

const login_logout = () => {
  return {
    type: LOGIN_ACTIONS.LOGOUT,
  };
};

export const logout = () => (dispatch) => {
  dispatch(login_logout());
};
