import React from 'react';
import $ from 'jquery';

var htmlScript = "";
var link = "";
var exp = "";
export default class LabExperiment extends React.Component {
	
	componentWillMount() {
		const readmePath = require("./docs/iat/iatDependency.json");
	
		window.onload = function(){
			link = document.createElement('link');
			link.type = 'text/css';
			link.rel = 'stylesheet';
			link.href = readmePath.css[0];
			document.getElementsByTagName('head')[0].appendChild(link);
    		for(var i=0; i<readmePath.js.length; i++) {
				htmlScript = document.createElement('script');
				htmlScript.type = 'text/javascript';
				htmlScript.src = readmePath.js[i];
				document.getElementsByTagName('head')[0].appendChild(htmlScript);
			}
		
			exp = document.createElement('iframe');
			exp.src = './docs/jsPsych/examples/ex.html';
			document.getElementsByTagName('body')[0].appendChild(exp);
		}

	}

	
	render() {
		return(
			<div>Hello</div>
		)
	}
}