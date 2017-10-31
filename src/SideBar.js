import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import LabNames from './experiments/LabNames';
import LabPages from './LabPages';

const routes = [
  { path: '/',
    exact: true,
    main: () => <h2>Home</h2>
  },
  { path: '/IAT',
    main: () => <h2>IAT(Implicit Association Test)</h2>
  },
  { path: '/Flanker',
    main: () => <h2>Flanker</h2>
  }
]

export default class SideBar extends React.Component {
	render() {
		return(
			<BrowserRouter>
				<div style={{ display: 'flex' }}>
			      <div style={{
			        padding: '10px',
			        width: '20%',
			        background: '#f0f0f0'
			      }}>
			      <ul style={{ listStyleType: 'none', padding: 0 }}>
			      {
			        LabNames.all().map(lab => (
							<li key={lab.index}>
								<Link to={`/LabList/${lab.name}`}>{lab.name}</Link>
							</li>
						))
			    	}
			      </ul>
			      </div>
			      <Route path="/LabList/:name" component={LabPages} />
			    </div>
			</BrowserRouter>
		)
	}
}
