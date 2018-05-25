import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Author from './components/Author';
import List from './components/List';

class App extends Component {
	// TODO move this away
	authorQuery = gql`
		{
			author {
				name
				bio
				avatarUrl
				location
				url
			}
		}
	`;

	reposQuery = gql`
		{
			repositories {
				id
				name
				createdAt
				description
				url
				pushedAt
				primaryLanguage
				topics {
					name
				}
			}
		}
	`;

	render() {
		return (
			<div>
				<header>
					<h1>Projects on GitHub</h1>
				</header>

				<Query query={this.authorQuery}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading author profile...</p>;
						if (error) return <p>Error loading author profile...</p>;
						return <Author profile={data.author} />;
					}}
				</Query>

				<div>
					<b>Filter</b> goes here
				</div>

				<Query query={this.reposQuery}>
					{({ loading, error, data }) => {
						if (loading) return <p>Loading repos...</p>;
						if (error) return <p>Error loading repos...</p>;
						return <List repos={data.repositories} />;
					}}
				</Query>
			</div>
		);
	}
}

export default App;
