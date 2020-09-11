import React from 'react';
import logo from './assets/images/logo/logo.svg'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Header from './components/header/';
import Register from './pages/register';
import BookInfo from './components/book-info';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Header />
				<Login />
			</Route>
			<Route exact path="/register">
				
				<BookInfo />
			</Route>
		</Switch>

	);
}

export default App;