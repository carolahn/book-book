import { combineReducers } from "redux";
import register from "./register/register";
import login from "./login/login";

import reviewsList from "./reviews-list";
import searchList from "./search-list";
import userBooks from "./user-books";

export default combineReducers({
  // books,
  register,
  login,
  reviewsList,
  searchList,
  userBooks,
});
