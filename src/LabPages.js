import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
import { Block } from 'jsxstyle';
import marked from "marked";
import __ from 'lodash';
import $ from 'jquery';
import LabNames from './docs/LabNames';
import LabExperiment from './LabExperiment';

// var app = express();
// var path = require('path');
// xconst __dirname = "./docs/jsPsych/examples";

//app.use("/docs", express.static(__dirname + "/demo-flanker.html"));
// const handleClick = () => {
// 		app.get('/', function(req, res) {
//     	res.sendFile(path.join(__dirname + '/demo-flanker.html'));
// });

// app.listen(3000);
// console.log("running at port 3000");
// 	}


export default class LabPages extends React.Component{
	constructor(props) {
		super(props);
		this.state = { markdown: ""}
	}

	componentWillMount() {
		const readmePath = require("./docs/iat/iat.md");

		fetch(readmePath)
		.then(response => {
			console.log(response.headers.get('Content-Type'));
			return response.text()
		})
		.then(text => {
			this.setState({
				markdown: marked(text)
			})
		});
	}


	componentWillReceiveProps(nextProps) {
		const readmePath = require("./docs/"+nextProps.match.params.path+"/"+nextProps.match.params.path+".md");
		console.log(readmePath)
		fetch(readmePath)
		.then(response => {
			return response.text()
		})
		.then(text => {
			this.setState({
				markdown: marked(text)
			})
		});
	}


	render() {
		const newPath = ""+this.props.match.url+"/start";
		
		return (
			<div>
			<section>
			<article dangerouslySetInnerHTML={{__html: this.state.markdown}}></article>
			</section>
			<Link to={newPath}>Start Experiment</Link>
			<Route path={newPath} component={LabExperiment} />
			</div>
			)
	}
}

// <script src=jspsych.js></script>
// 			<script src={{this.jspsychsource}}></script>
// {$.getJSON("./docs/iat/iatDependency.json", function() {
			// 	var obj = JSON.parse("./docs/iat/iatDependency.json");
			// 	console.log(obj);
			// })}