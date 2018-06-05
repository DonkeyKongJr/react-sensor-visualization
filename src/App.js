import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  SensorData from './SensorData';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link href="//cdn.muicss.com/mui-0.9.39/css/mui.min.css" rel="stylesheet" type="text/css" />
      <script src="//cdn.muicss.com/mui-0.9.39/js/mui.min.js"></script>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Sensor Visualization.</h1>
        </header>
        <div className="App-intro">
          <SensorData />
        </div>
      </div>
    );
  }
}

export default App;
