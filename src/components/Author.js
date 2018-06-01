import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Author = props => {
	return (
		<Fragment>
			<p>
				<b>Profile</b>
			</p>
			<p>
				<img
					src={props.profile.avatarUrl}
					alt={props.profile.name}
					width="120"
					height="120"
				/>
				<br />
				{/* TODO move this to CSS*/}
				{props.profile.name} - {props.profile.bio} - {props.profile.location}
				<br />
				<a href={props.profile.url} target="_blank">
					{props.profile.url}
				</a>
			</p>
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
