import { combineReducers } from "redux";
import books from "./books";
import token from "./token";

export default combineReducers({ books, token });
