import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import LabNames from './LabNames';
import LabPages from './LabPages';
import GridList, { GridListTile } from 'material-ui/GridList';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Selector from './Selector';


const listStyle = {
	list: {
		width: '100%'
	}
}

export default class Home extends React.Component {
	render() {
		return(
			<div id="labs">
			<Selector />
				<div>
					<GridList cellHeight={300} cols={3}>
					{
						LabNames.all().map(lab => (
							<GridListTile>
								<Link to={"/LabList/"+lab.path} style={{textDecoration: 'none'}}>
									<Card style={{width: '90%', height: '90%', margin: '2.5% auto'}}>
										<CardMedia image={lab.imagePath} title={lab.name+"Picuture"} style={{height: '100px'}}/>
										<CardContent>
											<Typography variant="headline" component="h2">
											{lab.name}
											</Typography>
											<Typography component="p">
											{lab.description}
											</Typography>
										</CardContent>	
									</Card>
								</Link>
							</GridListTile>
						))
					}
					</GridList>
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




// <List style={listStyle.list}>
// 					<Link to="/LabList/iat" style={{textDecoration: 'none'}}>
// 						<ListItem button>
// 							<Avatar alt="Image" src="blue.png" />
// 							<ListItemText primary="IAT" secondary="Implicit Association Test contains images or HTML-formatted content as stimulus." />
// 						</ListItem>
// 					</Link>
// 					<Link to="/LabList/flanker" style={{textDecoration: 'none'}}>
// 						<ListItem button>
// 							<Avatar alt="Flanker" src="blue.png" />
// 							<ListItemText primary="Flanker" secondary="Tests reflex." />
// 						</ListItem>
// 					</Link>
// 					</List>

// <GridListTile>
// 							<Card style={{width: '90%', margin: 'auto'}}>
// 								<Link to="/LabList/iat" style={{textDecoration: 'none'}}>
// 									<CardMedia image="/blue.png" title="iatPicture" style={{height: '100px'}}/>
// 									<CardContent>
// 										<Typography variant="headline" component="h2">
// 										IAT
// 										</Typography>
// 										<Typography component="p">
// 										Two sentences of IAT experiment. 
// 										</Typography>
// 									</CardContent>
// 								</Link>
// 							</Card>
// 						</GridListTile>
// 						<GridListTile>
// 						<Card style={{width: '90%', margin: 'auto'}}>
// 							<Link to="/LabList/iat" style={{textDecoration: 'none'}}>
// 								<CardMedia image="/blue.png" title="iatPicture" style={{height: '50%'}}/>
// 								<CardContent>
// 									<Typography variant="headline" component="h2">
// 									IAT
// 									</Typography>
// 									<Typography component="p">
// 									Two sentences of IAT experiment. 
// 									</Typography>
// 								</CardContent>
// 							</Link>
// 						</Card>
// 						</GridListTile>
// 						<GridListTile>
// 						<Card style={{width: '90%', margin: 'auto'}}>
// 							<Link to="/LabList/iat" style={{textDecoration: 'none'}}>
// 								<CardMedia image="/blue.png" title="iatPicture" style={{height: '50%'}}/>
// 								<CardContent>
// 									<Typography variant="headline" component="h2">
// 									IAT
// 									</Typography>
// 									<Typography component="p">
// 									Two sentences of IAT experiment. 
// 									</Typography>
// 								</CardContent>
// 							</Link>
// 						</Card>
// 						</GridListTile>
// 					</GridList>