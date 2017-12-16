import React from 'react';

function Place(props) {
	return <div>
		<span>props.name</span>
		<span>props.purpose</span>
		<span>props.time</span>
		<span>props.address</span>
	</div>;
}

export default Place;
