import React, { Component } from 'react';
import CvpSingle from './Components/CvpSingle';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{minHeight: "100px"}}></div>
        <CvpSingle />
      </div>
    );
  }
}

export default App;
