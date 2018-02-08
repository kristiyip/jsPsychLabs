import React from 'react';
import $ from 'jquery';

var htmlScript = "";
var link = "";
var exp = "";
export default class LabExperiment extends React.Component {
	
	// componentWillMount() {
	// 	const readmePath = require("./docs/iat/iatDependency.json");
	// 	//const r = require("html-loader!./docs/jsPsych/examples/ex.html");
		
	// 	window.onload = function(){
	// 		link = document.createElement('link');
	// 		link.type = 'text/css';
	// 		link.rel = 'stylesheet';
	// 		link.href = readmePath.css[0];
	// 		document.getElementsByTagName('head')[0].appendChild(link);
 //    		for(var i=0; i<readmePath.js.length; i++) {
	// 			htmlScript = document.createElement('script');
	// 			htmlScript.type = 'text/javascript';
	// 			htmlScript.src = readmePath.js[i];
	// 			document.getElementsByTagName('head')[0].appendChild(htmlScript);
	// 		}
		
	// 		// exp = document.createElement('iframe');
	// 		// exp.src = './docs/jsPsych/examples/ex.html';
	// 		// document.getElementsByTagName('body')[0].appendChild(exp);
	// 	}

	// }


	render() {
		const readmePath = "/experiments/iat/iatDependency.json";
		console.log(readmePath);
		// var cssLink = "<link type='text/css' rel='stylesheet' href=readmePath.css[0]></link>";
		// var jsScripts = "";

		// for(var i=0; i<readmePath.js.length; i++) {
		// 		htmlScript = document.createElement('script');
		// 		htmlScript.type = 'text/javascript';
		// 		htmlScript.src = readmePath.js[i];
		// 		document.getElementsByTagName('head')[0].appendChild(htmlScript);
		// 	}
		return(
			<div>
			<link type='text/css' rel='stylesheet' href={'http://localhost:3000/jsPsych/css/jspsych.css'} />
			<script type='text/javascript' src={'http://localhost:3000/jsPsych/jspsych.js'} />
			<script type='text/javascript' src={'http://localhost:3000/jsPsych/plugins/jspsych-iat-image.js'} />
			<script type='text/javascript' src={'http://localhost:3000/jsPsych/plugins/jspsych-iat-html.js'} />
			<script type='text/javascript' src={'http://localhost:3000/jsPsych/plugins/jspsych-html-keyboard-response.js'} />
			<div>Hello</div>
			</div>
		)
	}
}