import { ADD_REPO } from './actionTypes';

export function addRepo(repo) {
	return {
		type: ADD_REPO,
		payload: repo
	};
}
