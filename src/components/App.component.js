import React from 'react';

import Search from './Search.component';

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="container-fluid">
					<Search />
				</div>
			</div>
		);
	}
}