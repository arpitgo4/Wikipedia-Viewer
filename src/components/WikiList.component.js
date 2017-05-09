import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class WikiList extends React.Component {

	render() {
		return (
			<div className="row">
				<div className="col-xs-offset-0 col-xs-11">
					{/*<ReactCSSTransitionGroup
						transitionName=""
						transitionEnterTimeout={}
						transitionLeaveTimeout={}>
						{this.props.wikiList.map(() => {

						})}
					</ReactCSSTransitionGroup>*/}

					<ul>
						{this.props.wikiList.map((page) => <ul>{page.extract}</ul>)}

					</ul>
						
				</div>
			</div>
		);
	}
}