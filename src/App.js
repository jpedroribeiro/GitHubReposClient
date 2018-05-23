import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './containers/VisibleList';
import VisibleList from './containers/VisibleList';
import { addRepo } from './actions/actions';

class App extends Component {
	componentDidMount() {
		const tempRepos = [
			{
				createdAt: '12/12/12a',
				description: 'PropTypes.string',
				id: 'PropTypes.number',
				name: 'PropTypes.string',
				primaryLanguage: 'PropTypes.string',
				pushedAt: 'PropTypes.number',
				repositoryTopics: 'PropTypes.any',
				url: 'PropTypes.string'
			},
			{
				createdAt: '12/12/12',
				description: 'PropTypes.string',
				id: 'PropTypes.numbedr',
				name: 'PropTypes.string',
				primaryLanguage: 'PropTypes.string',
				pushedAt: 'PropTypes.number',
				repositoryTopics: 'PropTypes.any',
				url: 'PropTypes.string'
			}
		];

		this.props.addNewRepo(tempRepos[0]);
		this.props.addNewRepo(tempRepos[1]);
	}

	render() {
		return (
			<div>
				<header>
					<h1>Projects on GitHub</h1>
				</header>

				<div>Profile info goes here</div>

				<div>Filter goes here</div>

				<VisibleList />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addNewRepo: repo => dispatch(addRepo(repo))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
