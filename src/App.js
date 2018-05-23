import React, { Component } from 'react';
import List from './containers/VisibleList';
import VisibleList from './containers/VisibleList';

class App extends Component {
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

export default App;
