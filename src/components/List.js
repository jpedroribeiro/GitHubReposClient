import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../components/Item';
import Loading from '../components/Loading';

class List extends Component {
	loading() {
		return <Loading />;
	}

	listRepos() {
		return (
			<React.Fragment>
				{this.props.repos.map(repo => {
					return <Item repo={repo} key={repo.id} />;
				})}
			</React.Fragment>
		);
	}

	render() {
		return this.props.repos.length ? this.listRepos() : this.loading();
	}
}

List.propTypes = {
	repos: PropTypes.array
};

export default List;
