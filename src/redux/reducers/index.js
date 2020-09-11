import { combineReducers } from "redux";
import books from "./books";
import register from './register';
import token from "./token";

export default combineReducers({ books, register, token });
