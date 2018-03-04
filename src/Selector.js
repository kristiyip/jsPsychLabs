import React from 'react';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import LabNames from './LabNames';

export default class Selector extends React.Component {
	state = {
		task: 'all'
	};

	handleChange = (event) => {
		this.setState({
			task: event.target.value
		});
	}

	render() {
		return(
			<div>
				<Select
					style={{width: '50%'}}
					value={this.state.task}
					onChange={this.handleChange}
					inputProps={{name: 'task', id: 'selectTask'}}
				> 
					<MenuItem value="all">All</MenuItem>
					<MenuItem value="reflex">Reflex</MenuItem>
				</Select>
			</div>
		)
	}
}