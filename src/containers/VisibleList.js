import { connect } from 'react-redux';
import List from '../components/List';

const getVisibleRepos = repos => {
	// switch (filter) {
	// 	default:
	// 		return repos;
	// }

	return repos;
};

const mapStateToProps = state => {
	return {
		repos: getVisibleRepos(state.repos)
	};
};

const VisibleList = connect(mapStateToProps, null)(List);

export default VisibleList;
