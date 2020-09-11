import { combineReducers } from "redux";
import books from "./books";
import register from "./register";
import login from "./login/login";
import searchList from "./search-list";

export default combineReducers({ books, register, login, searchList });
