import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class WikiList extends React.Component {

	wikiPage = 'https://en.wikipedia.org/?curid=';

	render() {
		return (
			<div className="row">
				<div className="col-xs-offset-1 col-xs-10">
					<ReactCSSTransitionGroup
						transitionName="wikilist"
						transitionEnterTimeout={1000}
						transitionLeaveTimeout={500}>
						{
							this.props.wikiList.map(page =>
								<div onClick={(({ pageid }) => () => this.openPage(pageid))(page)} className="wikilist-row" key={page.pageid}>
									<p className="wikilist-row-title">{page.title}</p>
									<p className="wikilist-row-body">{page.extract}</p>
								</div>
							)
						}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		);
	}

	openPage(pageId){
		window.open(this.wikiPage + pageId, '_blank');
	}
}