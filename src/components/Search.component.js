import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Search extends React.Component {

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
							<p>Click here for a random article</p>
						</div>
					</div>

					<div className="row search-icon-row">
						<div className="col-xs-12">
							<div onClick={this.expand.bind(this)} className={`search-icon ${this.state.isExpanded ? "search-icon-expand" : ""}`}>
								<input type="text" className="center-block" />
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

	expand() {
		this.setState({ ...this.state, isExpanded: !this.state.isExpanded });
	}
}