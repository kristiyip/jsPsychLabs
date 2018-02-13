import React, { Component } from 'react';
import Apps from './App.css';
import LabPages from './LabPages';
import ExperimentPreview from './ExperimentPreview';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

const jsPsych = window.jsPsych;


class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">jsPsych Labs</h1>
          </header>
          <Switch>
            <Route exact path="/LabList" component={Home} />
            <Route path="/LabList/:path" component={LabPages} />
            <Route path="/LabList/:path/start" component={ExperimentPreview} />
          </Switch>
        </div>
    );
  }
}

export default App;
