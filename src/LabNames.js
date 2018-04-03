import React from 'react';

const LabNames = {
	labNames: [
	{path: "iat", name: "IAT", type: "", imagePath:"/blue.png", type: "reflex", time: "15min", description: "A simple implicit association test. Tests the strength of a person's automatic association between concepts and evaluations or stereotypes."},
	{path: "flanker", name: "Flanker", type: "", imagePath:"/blue.png", type: "reflex", time: "5min", description: "A simple reflex test where you have 5 characters, all of which are the same or one is different."},
	{path: "numberMemory", name: "Number Memory", type: "reflex", imagePath:"/blue.png", type: "memory", time: "10min", description: "Memorize a sequence of numbers that increase by one with every test passed and decreases by one with every test failed."}
	],
	all: function() {return this.labNames}
}

export default LabNames;