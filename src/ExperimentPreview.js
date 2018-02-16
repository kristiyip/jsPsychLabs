import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const buttonStyle = {
	left: '39.5%',
	margin: '2px',
	boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14)',
	backgroundColor: 'orange'
}

export default class ExperimentPreview extends React.Component {

	componentWillMount() {
		fetch('/experiments/'+this.props.match.params.path+'/config.json')
		.then(response => {
			return response.json();
		})
		.then(json => {
			for(var i=0; i<json.plugins.length; i++) {
				const script = document.createElement("script");
				script.className = "rendered-script";
				script.src=json.plugins[i];
				script.async=false;
				document.body.appendChild(script);
			}

			const link = document.createElement("link");
			link.rel="stylesheet";
			link.href=json.styling[0];
			link.className = "rendered-script";
			document.body.appendChild(link);
		});
	}

	componentWillUnmount() {
		var toRemove = document.querySelector('.rendered-script');
		for(var i=0; i<toRemove.length; i++){
			toRemove[i].remove();
		}
	}
	
	render() {
		return(
			<div id="experimentContainer" style={{width: '100vw', height: '100vh', backgroundColor: '#ddd'}}>
				<Button variant="raised" color="black" style={buttonStyle}>Back To Home</Button>
				<Paper elevation={6} style={{position: 'absolute', top: '5%', left: '5%', width: '90vw', height: '90vh'}}>
					<div id="preview" style={{width: '90vw', height: '90vh'}}>
					</div>
				</Paper>
			</div>
		)
	}
}