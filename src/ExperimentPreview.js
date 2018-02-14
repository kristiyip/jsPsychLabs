import React from 'react';
import Paper from 'material-ui/Paper';

export default class ExperimentPreview extends React.Component {

	componentWillMount() {
		fetch('/experiments/'+this.props.match.params.path+'/config.json')
		.then(response => {
			return response.json();
		})
		.then(json => {
			for(var i=0; i<json.plugins.length; i++) {
				const script = document.createElement("script");
				script.src=json.plugins[i];
				script.async=false;
				document.body.appendChild(script);
			}

			const link = document.createElement("link");
			link.rel="stylesheet";
			link.href=json.styling[0];
			document.body.appendChild(link);
		});
	}

	componentWillUnmount() {
		
	}
	
	render() {
		return(
			<div id="experimentContainer" style={{position: 'absolute', top: '5%', left: '5%', width: '90vw', height: '90vh'}}>
				<Paper elevation={6} style={{width: '90vw', height: '90vh'}}>
					<div id="preview" style={{width: '90vw', height: '90vh'}}>
					</div>
				</Paper>
			</div>
		)
	}
}