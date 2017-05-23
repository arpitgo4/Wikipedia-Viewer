import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import superagent from 'superagent';

export default class Search extends React.Component {

	ENTER_KEY_CODE = 13;
	api = 'https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';

	constructor() {
		super();
		this.state = { isExpanded: false };
	}

	render() {
		return (
			<div className={`row text-center ${this.props.pullUp ? 'pull-up' : 'push-down'}`}>
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
							<div className={`search-icon ${this.state.isExpanded ? 'search-icon-expand' : 'search-icon-shrink'}`}>
								<input onKeyDown={this.search.bind(this)}
									onClick={ this.state.isExpanded ? null : this.expand.bind(this) } type="text" ref="searchText" className="center-block" />							
								<p className="cross" onClick={this.shrink.bind(this)} />
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
			this.props.onSearchHandler([]);			// clear the rendered list
			this.props.adjustSearchComponent(true);
			const toSearch = this.refs.searchText.value;
			superagent
				.get(this.api + toSearch)
				.set('Api-User-Agent', 'arpit.go4@gmail.com')
				.end((err, res) => {
					if(err) console.log(err);
					else this.props.onSearchHandler(res.body.query.pages || []);
				});
		}
	}

	expand() {
		console.log('expanding the search icon')
		this.setState({ ...this.state, isExpanded: true });
	}

	shrink() {
		console.log('shrinking the search icon');
		this.setState({ ...this.state, isExpanded: false });
	}
}