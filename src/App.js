import React, { Component } from 'react';
import Apps from './App.css';
import LabPages from './LabPages';
import ExperimentPreview from './ExperimentPreview';
import { Route, Switch } from 'react-router-dom';
import Selector from './Selector';
import { BrowserRouter } from 'react-router-dom';

const jsPsych = window.jsPsych;


class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/LabList" component={Selector} />
            <Route exact path="/LabList/:path" component={LabPages} />
            <Route path="/LabList/:path/start" component={ExperimentPreview} />
          </Switch>
        </div>
    );
  }
}

export default App;
