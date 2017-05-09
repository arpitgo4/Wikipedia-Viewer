import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class WikiList extends React.Component {

	render() {
		console.log('wiki pages', this.props.wikiList);
		return (
			<div className="row">
				<div className="col-xs-offset-0 col-xs-11">
					<ReactCSSTransitionGroup
						transitionName="wikilist"
						transitionEnterTimeout={200}
						transitionLeaveTimeout={200}>
						{
							this.props.wikiList.map(page =>
								<ul key={Math.random()}>{page.extract}</ul>)
						}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		);
	}
}