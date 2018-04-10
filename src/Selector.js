import React from 'react';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import LabNames from './LabNames';
import RenderCards from './RenderCards';

export default class Selector extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectorTask: 'all'
		}
	}

	handleChange = event => {
		this.setState({
			selectorTask: event.target.value
		});
	}

	render() {
		console.log(this.state.selectorTask);
		return(
			<div>
				<Select
					value={this.state.selectorTask}
					onChange={this.handleChange}
					inputProps={{name: 'selectorTask', id: 'selectorTask-simple'}}
					style={{width: '50%'}}
				> 
					<MenuItem value="all">All</MenuItem>
					<MenuItem value="reflex">Reflex</MenuItem>
				</Select>
				<RenderCards task={this.state.selectorTask} />
			</div>
		)
	}
}