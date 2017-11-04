import React from 'react';

const LabNames = {
	labNames: [
	{path: '/iat', index: 1, name: "IAT(Implicit Association Test)"},
	{path: '/flanker', index: 2, name: "Flanker"}
	],
	all: function() {return this.labNames}
}

export default LabNames;