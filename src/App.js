import React from 'react';
import logo from './assets/images/logo/logo.svg'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Header from './components/header/';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Header />
				<Login />
			</Route>
			<Route exact path="/register">
				<Header />
			</Route>
		</Switch>
	);
}

export default App;