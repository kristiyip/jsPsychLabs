import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LabNames from './docs/LabNames';
import LabPages from './LabPages';

// const paths = {
// 	experiments: match => `${match.path}/listOfLabs/:mod`
// }

export default class SideBar extends React.Component {
	render() {
		const { data, match } = this.props;
		return(
			<BrowserRouter>
				<div style={{ display: 'flex' }}>
			      <div style={{
			        padding: '10px',
			        width: '150px',
			        maxWidth: '150px',
			        minWidth: '150px',
			        background: '#f0f0f0'
			      }}>
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
			</BrowserRouter>
		)
	}
}
