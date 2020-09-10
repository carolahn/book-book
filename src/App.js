import React from 'react';
import logo from './assets/images/logo/logo.svg'
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Login />
			</Route>
		</Switch>
	);
}

export default App;