import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const Author = props => {
	return (
		<Fragment>
			<p>
				<b>Profile</b>
			</p>
			<p>{JSON.stringify(props.profile)}</p>
		</Fragment>
	);
};

Author.prototype = {
	profile: PropTypes.shape({
		name: PropTypes.string,
		bio: PropTypes.string,
		avatarUrl: PropTypes.string,
		location: PropTypes.string
	})
};

export default Author;
