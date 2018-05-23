import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers';
import './index.css';
import App from './App';

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

const store = createStore(rootReducer, { repos: tempRepos });

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
