import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../components/Item';

const List = props => {
	return (
		<ol>
			{props.repos.map(repo => {
				return <Item repo={repo} key={repo.id} />;
			})}
		</ol>
	);
};

List.propTypes = {
	repos: PropTypes.array
};

export default List;
