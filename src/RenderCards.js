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

const listStyle = {
	list: {
		width: '100%'
	}
}

export default class RenderCards extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			renderTask: this.props.task,
			names: [],
			times: [],
			paths: [],
			imagePaths: [],
			descriptions: []
		};
	}

	componentWillMount() {
		var tempNames = [];
		var tempTimes = [];
		var tempDescriptions = [];
		var tempPaths = [];
		var tempImagePaths = [];
		var tempList = [];

		fetch('/listOfExperiments.json')
			.then(response => {
				return response.json();
			})
			.then(jsonFile => {
				var tempNumber = [];
				for(var i=0; i<jsonFile.experiments.length; i++) {
					tempNumber.push(jsonFile.experiments[i] + "/config.json");
				}
				return tempNumber;
			}).then(list => {

				Promise.all(
					list.map(element => {
						fetch(element)
						.then(responseTwo => {
							return responseTwo.json();
						})
						.then(jsonTwo => {
					
							tempNames.push(jsonTwo.name);
							tempTimes.push(jsonTwo.time);
							tempPaths.push(jsonTwo.path);
							tempImagePaths.push(jsonTwo.imagePath);
							tempDescriptions.push(jsonTwo.description);

							this.setState({
								renderTask: 'all',
								names: tempNames,
								times: tempTimes,
								paths: tempPaths,
								imagePaths: tempImagePaths,
								descriptions: tempDescriptions
							})
						})
					})
				)
			})
	}


	componentWillReceiveProps(nextProps) {
		console.log("in componentWillReceiveProps");

		if(this.props.task !== nextProps.task) {

			fetch('/listOfExperiments.json')
			.then(response => {
				return response.json();
			})
			.then(jsonFile => {
				var tempNumber = [];
				for(var i=0; i<jsonFile.experiments.length; i++) {
					tempNumber.push(jsonFile.experiments[i] + "/config.json");
				}
				return tempNumber;
			}).then(list => {
				var tempNames = [];
				var tempTimes = [];
				var tempDescriptions = [];
				var tempPaths = [];
				var tempImagePaths = [];
				var tempList = [];

				Promise.all(
					list.map(element => {
						fetch(element)
						.then(responseTwo => {
							return responseTwo.json();
						})
						.then(jsonTwo => {
							if(this.props.task !== 'all') {
								if(jsonTwo.type.includes(this.props.task)) {
									tempNames.push(jsonTwo.name);
									tempTimes.push(jsonTwo.time);
									tempPaths.push(jsonTwo.path);
									tempImagePaths.push(jsonTwo.imagePath);
									tempDescriptions.push(jsonTwo.description);
								}
							} else {
								tempNames.push(jsonTwo.name);
								tempTimes.push(jsonTwo.time);
								tempPaths.push(jsonTwo.path);
								tempImagePaths.push(jsonTwo.imagePath);
								tempDescriptions.push(jsonTwo.description);
							}

							this.setState({
								renderTask: nextProps.task,
								names: tempNames,
								times: tempTimes,
								paths: tempPaths,
								imagePaths: tempImagePaths,
								descriptions: tempDescriptions
							})
						})
					})
				)
			});
		}
	}

	render() {
		var list = [];
		for(var i=0; i<this.state.names.length; i++) {
			list.push(i);
		}
		return(
			<div id="labs">
				<div>
					<GridList cellHeight={375} cols={3}>
					{
						list.map(lab => (
							<GridListTile>
								<Card style={{width: '90%', height: '90%', margin: '2.5% auto'}}>
									<CardMedia image={this.state.imagePaths[lab]} title={this.state.names[lab]+"Picuture"} style={{height: '125px'}}/>
									<CardContent>
										<Typography variant="headline" component="h2" style={{fontWeight: '20px', fontSize: '25px', textAlign: 'left'}}>
										{this.state.names[lab]}
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
												<Typography component="p">{this.state.times[lab]}</Typography>
											</div>
										</IconButton>
										</div>
										<Typography component="p" style={{textAlign: "left"}}>
											{this.state.descriptions[lab]}
										</Typography>
									</CardContent>	
									<CardActions style={{position: 'absolute', left: '20px', bottom: '20px'}}>
										<Link to={"/LabList/"+this.state.paths[lab]} style={{textDecoration: 'none'}}>
											<Button size="small">
											Learn More
											</Button>
										</Link>
										<Link to={"/LabList/"+this.state.paths[lab]+"/"+"start"} style={{textDecoration: 'none'}}>
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

