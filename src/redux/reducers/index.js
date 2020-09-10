import { combineReducers } from "redux";
import books from "./books";
import register from './register'

export default combineReducers({ books, register });
