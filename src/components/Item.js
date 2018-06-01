import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
	repo = this.props.repo;

	topics() {
		const topics = this.props.repo.topics;
		if (topics.length) {
			return (
				<ul>
					{topics.map(topic => {
						return (
							<li key={topic[Object.getOwnPropertySymbols(topic)[0]]}>
								{topic.name}
							</li>
						);
					})}
				</ul>
			);
		}
	}

	betterDate(ISODate) {
		const betterDate = new Date(ISODate);
		return betterDate.toLocaleDateString();
	}

	render() {
		return (
			<article>
				<h3>
					{this.repo.name} (<i>{this.repo.primaryLanguage}</i>)
				</h3>
				<p>
					<a href={this.repo.url} target="_blank">
						{this.repo.url}
					</a>
				</p>
				<p>{this.repo.description}</p>
				<p>
					Created at: {this.betterDate(this.repo.createdAt)} / Last push at:{' '}
					{this.betterDate(this.repo.pushedAt)}{' '}
				</p>

				{this.topics()}
			</article>
		);
	}
}

Item.propTypes = {
	repo: PropTypes.shape({
		createdAt: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.string,
		name: PropTypes.string,
		primaryLanguage: PropTypes.string,
		pushedAt: PropTypes.string,
		topics: PropTypes.any,
		url: PropTypes.string
	})
};

export default Item;
