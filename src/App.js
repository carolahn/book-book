import React from 'react';
import logo from './assets/images/logo.svg'
import './App.css';

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Written by Augusto Pietroski</p>
			</header>
		</div>
	);
}

export default App;
