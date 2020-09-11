import { combineReducers } from "redux";
import books from "./tests/books";
import register from './register';
import token from "./tests/token";

export default combineReducers({ books, register, token });
