import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Header from './components/Header';
import Filter from './components/Filter';
import Loading from './components/Loading';
import Author from './components/Author';
import List from './components/List';
import { authorQuery, reposQuery } from './queries';

class App extends Component {
	render() {
		return (
			<div>
				<Header /> {/* TODO styles for app*/}
				
				<Query query={authorQuery}>
					{({ loading, error, data }) => {
						if (loading) return <Loading />;
						if (error) return <p>Error loading author profile...</p>;
						return <Author profile={data.author} />;
					}}
				</Query>

				<Filter /> {/* TODO filters for repo list */}

				<Query query={reposQuery}>
					{({ loading, error, data }) => {
						if (loading) return <Loading />;
						if (error) return <p>Error loading repos...</p>;
						return <List repos={data.repositories} />;
					}}
				</Query>
			</div>
		);
	}
}

export default App;
