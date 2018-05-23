import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Item = props => {
	const repo = props.repo;
	return (
		<li>
			createdAt: {repo.createdAt} <br />
			description: {repo.description} <br />
			id: {repo.id} <br />
			name: {repo.name} <br />
			primaryLanguage: {repo.primaryLanguage} <br />
			pushedAt: {repo.pushedAt} <br />
			repositoryTopics: {repo.repositoryTopics} <br />
			{/* nodes: [{topic: {name: "chrome-extension"}}…] */}
			url: {repo.url}
		</li>
	);
};

Item.propTypes = {
	repo: PropTypes.shape({
		createdAt: PropTypes.string,
		description: PropTypes.string,
		id: PropTypes.string,
		name: PropTypes.string,
		primaryLanguage: PropTypes.string,
		pushedAt: PropTypes.string,
		repositoryTopics: PropTypes.any,
		url: PropTypes.string
	})
};

export default Item;
