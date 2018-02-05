import React from 'react';
import Paper from 'material-ui/Paper';

export default class ExperimentPreview extends React.Component {
	render() {
		console.log("in experiment preview");
		return(
			<div style={{width: '90vw', height: '90vh'}}>
				<Paper className="preview" elevation={6}>
					<div>
						Here
						<script type="text/html" src="/experiments/iat/index.html" />
					</div>
				</Paper>
			</div>
		)
	}
}