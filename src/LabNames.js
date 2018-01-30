import React from 'react';

const LabNames = {
	labNames: [
	{path: 'iat', index: 1, name: "IAT", exPath: "iatExperiment"},
	{path: 'flanker', index: 2, name: "Flanker", exPath: "flankerExperiment"}
	],
	all: function() {return this.labNames}
}

export default LabNames;