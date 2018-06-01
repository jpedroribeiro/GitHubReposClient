import React from 'react';
import './Loading.css';

const Loading = props => {
	return (
		<React.Fragment>
			{props.message && props.message.length ? <p>{props.message}</p> : ''}
			<div className="lds-ellipsis">
				<div />
				<div />
				<div />
				<div />
			</div>
		</React.Fragment>
	);
};

export default Loading;
