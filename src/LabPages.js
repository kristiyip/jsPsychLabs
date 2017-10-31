import React from 'react';

const LabPages = ({ match }) => (
	<div>
		{match.params.name}
	</div>
)

export default LabPages;