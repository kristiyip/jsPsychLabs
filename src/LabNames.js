import React from 'react';

const LabNames = {
	labNames: [
	{path: "iat", name: "IAT", imagePath:"/blue.png", description: "A simple implicit association test."},
	{path: "flanker", name: "Flanker", imagePath:"/blue.png", description: "A simple reflex test where you have 5 characters, all of which are the same or one is different."},
	{path: "numberMemory", name: "Number Memory", imagePath:"/blue.png", description: "Memorize a sequence of numbers that increase by one with every test passed and decreases by one with every test failed."}
	],
	all: function() {return this.labNames}
}

export default LabNames;