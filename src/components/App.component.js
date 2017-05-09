import React from 'react';

import Search from './Search.component';
import WikiList from './WikiList.component';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = { pages: [] };
	}

	render() {
		return (
			<div className="app">
				<div className="container-fluid">
					<Search onSearchHandler={this.renderWikiList.bind(this)} />
					<WikiList wikiList={this.state.pages} />
				</div>
			</div>
		);
	}

	renderWikiList(pages) {
		const pageArr = [];
		for(let pageId in pages)
			pageArr.push(pages[pageId]);
		
		this.setState({ ...this.state, pages: pageArr });
	}
}