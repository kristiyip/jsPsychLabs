import React, { Component } from 'react';
import Apps from './App.css';
import LabPages from './LabPages';
import { Route } from 'react-router-dom';
import SideBar from './SideBar';
import { BrowserRouter } from 'react-router-dom';

const jsPsych = window.jsPsych;


class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">jsPsych Labs</h1>
          </header>
          <BrowserRouter>
          <SideBar />
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
