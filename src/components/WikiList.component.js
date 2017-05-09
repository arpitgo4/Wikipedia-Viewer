import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class WikiList extends React.Component {

	wikiPage = 'https://en.wikipedia.org/?curid=';

	render() {
		console.log('wiki pages', this.props.wikiList);
		return (
			<div className="row">
				<div className="col-xs-offset-1 col-xs-10">
					<ReactCSSTransitionGroup
						transitionName="wikilist"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={200}>
						{
							this.props.wikiList.map(page =>
								<div onClick={(({ pageid }) => () => this.openPage(pageid))(page)} className="wikiList-row" key={Math.random()}>
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
		console.log('opening page', pageId);
		window.open(this.wikiPage + pageId, '_blank');
	}
}