import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Block } from 'jsxstyle';
import marked from "marked";
import __ from 'lodash';
import $ from 'jquery';

// var app = express();
// var path = require('path');
//xconst __dirname = "./docs/jsPsych/examples";

//app.use("/docs", express.static(__dirname + "/demo-flanker.html"));
// const handleClick = () => {
// 		app.get('/', function(req, res) {
//     	res.sendFile(path.join(__dirname + '/demo-flanker.html'));
// });

// app.listen(3000);
// console.log("running at port 3000");
// 	}

const handleClick = () => {
     $("#root").load("demo-flanker.html");
}

export default class LabPages extends React.Component{
	constructor(props) {
		super(props);
		this.state = { markdown: ""}
	}

	componentWillMount() {
		const readmePath = require("./docs/iat.md");

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


	componentWillReceiveProps(nextProps) {
		const readmePath = require("./docs/"+nextProps.match.params.path+".md");

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

	componentWillUnmount(){
      this.setState({markdown: ""})
  }

	render() {
		return (
			<div>
			<section>
			<article dangerouslySetInnerHTML={{__html: this.state.markdown}}></article>
			</section>
			<button onClick={handleClick}>Start Experiment</button>
			</div>
			)
	}
}