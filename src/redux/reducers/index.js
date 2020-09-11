import { combineReducers } from "redux";
import books from "./books";
import register from './register'
import login from './login/login';

export default combineReducers({ books, register, login });
