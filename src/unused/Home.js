import React from 'react';
import { Link, Route, Switch} from 'react-router-dom';
import LabNames from './LabNames';
import LabPages from './LabPages';
import GridList, { GridListTile } from 'material-ui/GridList';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Selector from './Selector';
import Button from 'material-ui/Button';
import { SupervisorAccount, AccessTime } from 'material-ui-icons';


import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

const listStyle = {
	list: {
		width: '100%'
	}
}

export default class Home extends React.Component {
	state = {
		task: 'all',
		names: '',
		times: '',
		types: '',
		descriptions: ''
	};

	handleChange = (event) => {
		this.setState({
			task: event.target.value
		});
	}

	componentWillMount() {

		fetch('/listOfExperiments.json')
		.then(response => {
			return response.json();
		})
		.then(jsonFile => {
			for(var i=0; i<jsonFile.experiments.length; i++) {
				var pathToGet = jsonFile.experiments[i] + "/config.json";
				fetch(pathToGet)
				.then(responseTwo => {
					return responseTwo.json();
				})
				.then(jsonTwo => {
					console.log(jsonTwo);
				})
			}
		});
	}

	render() {
		console.log(this.props.task);
		return(
			<div id="labs">
				<div>
					<GridList cellHeight={375} cols={3}>
					{
						LabNames.all().map(lab => (
							<GridListTile>
								<Card style={{width: '90%', height: '90%', margin: '2.5% auto'}}>
									<CardMedia image={lab.imagePath} title={lab.name+"Picuture"} style={{height: '125px'}}/>
									<CardContent>
										<Typography variant="headline" component="h2" style={{fontWeight: '20px', fontSize: '25px', textAlign: 'left'}}>
										{lab.name}
										</Typography>
										<div style={{width: '32%'}}>
										<IconButton>
											<div style={{display: 'flex', padding: '0px 20px 0px 0px'}}>
												<SupervisorAccount />
												<Typography component="p">230</Typography>
											</div>
										</IconButton>
										<IconButton>
											<div style={{display: 'flex'}}>
												<AccessTime />
												<Typography component="p">{lab.time}</Typography>
											</div>
										</IconButton>
										</div>
										<Typography component="p" style={{textAlign: "left"}}>
											{lab.description}
										</Typography>
									</CardContent>	
									<CardActions style={{position: 'absolute', left: '20px', bottom: '20px'}}>
										<Link to={"/LabList/"+lab.path} style={{textDecoration: 'none'}}>
											<Button size="small">
											Learn More
											</Button>
										</Link>
										<Link to={"/LabList/"+lab.path+"/"+"start"} style={{textDecoration: 'none'}}>
											<Button size="small">
											Begin Experiment
											</Button>
										</Link>
									</CardActions>
								</Card>
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