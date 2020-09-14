import { combineReducers } from "redux";
import register from "./register/register";
import login from "./login/login";

import books from "./tests/books";
import token from "./tests/token";
import reviewsList from "./reviews-list";
import searchList from "./search-list";
import userBooks from "./user-books";

export default combineReducers({
  // books,
  register,
  login,
  token,
  reviewsList,
  searchList,
  userBooks,
});
