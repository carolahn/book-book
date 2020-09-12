import { combineReducers } from "redux";
import register from "./register";
import login from "./login/login";

import books from "./tests/books";
import token from "./tests/token";
import reviewsList from "./reviews-list";

export default combineReducers({ books, register, login, token, reviewsList });
