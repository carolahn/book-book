import { combineReducers } from "redux";

import register from "./register/register";
import login from "./login/login";
import reviewsList from "./reviews-list";
import searchList from "./search-list";
import userBooks from "./user-books";
import bookDescription from "./book-description";
import userBooksById from "./user-books-by-id";

export default combineReducers({
  register,
  login,
  reviewsList,
  searchList,
  userBooks,
  bookDescription,
  userBooksById,
});
