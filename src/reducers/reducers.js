import { ADD_REPO } from '../actions/actionTypes';

const initialState = {
	// TODO add filter and profile here
	repos: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_REPO:
			return {
				...state,
				repos: [...state.repos, action.payload]
			};
		default:
			return state;
	}
};

export default rootReducer;
