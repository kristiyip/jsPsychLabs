import React from 'react';

const LabNames = {
	labNames: [
	{path: "iat", name: "IAT", imagePath:"/blue.png", description: "A simple implicit association test."},
	{path: "flanker", name: "Flanker", imagePath:"/blue.png", descript: "A simple reflex test where you have 5 characters, all of which are the same or one is different."}
	],
	all: function() {return this.labNames}
}

export default LabNames;