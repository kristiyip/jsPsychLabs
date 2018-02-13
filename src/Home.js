import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import LabNames from './LabNames';
import LabPages from './LabPages';

export default class Home extends React.Component {
	render() {
		return(
			<div id="labs">
				<div style={{width: '30%'}}>
					<ul style={{ listStyleType: 'none', padding: 0 }}>
			   			{
			     			LabNames.all().map(lab => (
								<li key={lab.index}>
									<Link to={`/LabList/${lab.path}`}>{lab.name}</Link>
								</li>
							))
			  			}
			   		</ul>
				</div>
				<Route path='/LabList/:path' component={LabPages} />
			</div>
		)
	}
}