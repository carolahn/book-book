import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Header from './components/header/';
import Register from './pages/register';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Header />
				<Login />
			</Route>
			<Route exact path="/register">
				<Header />
				<Register />
			</Route>
		</Switch>
	);
}

export default App;