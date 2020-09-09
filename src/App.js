import React from 'react';
import logo from './assets/images/logo.svg'
import './App.css';
import { Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<Switch>
			<Route exact path="/">
				<div className="App">
					<header className="App-header">
						<img src={logo} />
					</header>
				</div>
			</Route>
		</Switch>
	);
}

export default App;