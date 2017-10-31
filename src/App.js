import React, { Component } from 'react';
import Apps from './App.css';
import Labs from './Labs';
import LabPages from './LabPages';
import { Route } from 'react-router-dom';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">jsPsych Labs</h1>
          </header>
          <SideBar />
        </div>
    );
  }
}

export default App;
// <Route exact={true} path="/" render={() => (
          //   <Labs />
          // )} />
          // <Route path="/LabList/:name" component={LabPages} />