import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function App() {
	return (
		<React.Fragment>
			<Header />
			<Main />
		</React.Fragment>
	);
}
