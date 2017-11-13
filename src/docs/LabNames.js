import React from 'react';

const LabNames = {
	labNames: [
	{path: 'iat', index: 1, name: "IAT", filePath: "./docs/IAT/iat.md"},
	{path: 'flanker', index: 2, name: "Flanker", filePath: "./docs/IAT/flanker.md"}
	],
	all: function() {return this.labNames}
}

export default LabNames;