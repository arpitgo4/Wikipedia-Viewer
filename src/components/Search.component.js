import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import superagent from 'superagent';

export default class Search extends React.Component {

	ENTER_KEY_CODE = 13;
	api = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
	page = 'https://en.wikipedia.org/?curid=';

	constructor() {
		super();
		this.state = { isExpanded: false };
	}

	render() {
		return (
			<div className="row text-center">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-12">
							<div className="rand-article-link">
								<a href="https://en.wikipedia.org/wiki/Special:Random" 
										target='_blank'>
										Click here for a random article
								</a>
							</div>
						</div>
					</div>

					<div className="row search-icon-row">
						<div className="col-xs-12">					
							<div onClick={this.expand.bind(this)} className={`search-icon ${this.state.isExpanded ? 'search-icon-expand' : 'search-icon-shrink'}`}>
								<input onKeyDown={this.search.bind(this)} type="text" ref="searchText" className="center-block" />							
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xs-12">
							<p>Click icon to search</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	search(event) {
		if(event.keyCode === this.ENTER_KEY_CODE){
			const toSearch = this.refs.searchText.value;
			superagent
				.post(this.api + toSearch)
				.set('Api-User-Agent', 'arpit.go4@gmail.com')
				.end((err, res) => {
					if(err) console.log(err);
					else console.log(res.body.query.pages);
				});
		}
	}

	expand() {
		this.setState({ ...this.state, isExpanded: !this.state.isExpanded });
	}
}