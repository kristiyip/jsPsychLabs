import React from 'react';
import { Route, Link } from 'react-router-dom';
import LabNames from './experiments/LabNames';

export default class Labs extends React.Component {
	render() {
		return(
			<div>
				<ul>
					{
						LabNames.all().map(lab => (
							<li key={lab.index}>
								<Link to={`/LabList/${lab.name}`}>{lab.name}</Link>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}

