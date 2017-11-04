import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Block } from 'jsxstyle';
// var ReactMarkdown = require('react-markdown');

// var input = '# This is a header\n\nAnd this is a paragraph';
// var input2 = require('./docs/IAT/iat.md');
// var fileArray = input2.split('\n');
// console.log(fileArray);
import marked from "marked";

// const LabPages = ({ match }) => (
// 	<div>
// 	{match.params.name}
// 	</div>
// )

// export default LabPages;
export default class LabPages extends React.Component{
	constructor(props) {
		super(props);
		this.state = { markdown: ""}
	}

	componentWillMount() {
		const readmePath = require("./docs/IAT/iat.md");

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
		const { markdown } = this.state;

		return (
			<section>
			<article dangerouslySetInnerHTML={{__html: markdown}}></article>
			</section>
			)
	}
}