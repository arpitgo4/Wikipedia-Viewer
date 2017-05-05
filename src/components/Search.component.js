import React from 'react';

export default class Search extends React.Component {
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
							<i className="search-icon center-block" />
							<input type="text" className="textbox" />
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
}