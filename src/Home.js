import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import LabNames from './LabNames';
import LabPages from './LabPages';
import GridList, { GridListTile } from 'material-ui/GridList';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const listStyle = {
	list: {
		width: '100%'
	}
}

export default class Home extends React.Component {
	render() {
		return(
			<div id="labs">
				<div>
					<List style={listStyle.list}>
					<Link to="/LabList/iat" style={{textDecoration: 'none'}}>
						<ListItem button>
							<Avatar alt="Image" src="blue.png" />
							<ListItemText primary="IAT" secondary="Implicit Association Test contains images or HTML-formatted content as stimulus." />
						</ListItem>
					</Link>
					<Link to="/LabList/flanker" style={{textDecoration: 'none'}}>
						<ListItem button>
							<Avatar alt="Flanker" src="blue.png" />
							<ListItemText primary="Flanker" secondary="Tests reflex." />
						</ListItem>
					</Link>
					</List>
				</div>
				<Route path='/LabList/:path' component={LabPages} />
			</div>
		)
	}
}

// <ul style={{ listStyleType: 'none', padding: 0 }}>
// 			   			{
// 			     			LabNames.all().map(lab => (
// 								<li key={lab.index}>
// 									<Link to={`/LabList/${lab.path}`}>{lab.name}</Link>
// 								</li>
// 							))
// 			  			}
// 			   		</ul>