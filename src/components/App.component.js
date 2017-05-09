import React from 'react';

import Search from './Search.component';
import WikiList from './WikiList.component';

export default class App extends React.Component {

	constructor() {
		super();
		this.state = { pages: [], pullUp: false };
	}

	render() {
		return (
			<div className="app">
				<div className="container-fluid">
					<Search onSearchHandler={this.renderWikiList.bind(this)} 
							pullUp={this.state.pullUp}
							adjustSearchComponent={this.adjustSearchComponent.bind(this)} />
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

	adjustSearchComponent(toPull) {
		this.setState({ ...this.state, pullUp: toPull });
	}
}