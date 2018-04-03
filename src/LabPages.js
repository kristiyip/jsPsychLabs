import React from 'react';
import { Redirect, Route, Link, Switch} from 'react-router-dom';
import { Block } from 'jsxstyle';
import marked from "marked";
import __ from 'lodash';
import $ from 'jquery';
import LabNames from './LabNames';
import ExperimentPreview from './ExperimentPreview';


export default class LabPages extends React.Component{
	constructor(props) {
		super(props);
		this.state = { markdown: ""}
	}

	componentWillMount() {
		const readmePath = '/experiments/'+this.props.match.params.path+'/'+this.props.match.params.path+'.md';

		fetch(readmePath)
		.then(response => {
			//console.log(response.headers.get('Content-Type'));
			return response.text()
		})
		.then(text => {
			this.setState({
				markdown: marked(text)
			})
		});
	}


	// componentWillReceiveProps(nextProps) {
	// 	const readmePath = "/experiments/"+nextProps.match.params.path+"/"+nextProps.match.params.path+".md";
	// 	console.log(readmePath)
	// 	fetch(readmePath)
	// 	.then(response => {
	// 		return response.text()
	// 	})
	// 	.then(text => {
	// 		this.setState({
	// 			markdown: marked(text)
	// 		})
	// 	});
	// }


	render() {
		const newPath = this.props.match.url+"/start";
		console.log("path to start  " + newPath);
		return (
			<div>
				<section>
					<article dangerouslySetInnerHTML={{__html: this.state.markdown}}></article>
				</section>
				<Link to={newPath}>Start Experiment</Link>
				<Route path={newPath} component={ExperimentPreview} />
			</div>
		)
	}
}
