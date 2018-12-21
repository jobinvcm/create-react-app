import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CvpSingle from './Components/CvpSingle';
import Navigation from './Components/Navigation';
import Users from './Pages/Users';
import Login from './Pages/Login';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={createMuiTheme()}>
          <Router>
            <div>
              <Navigation />
              <Switch>
                <Route path='/user' component={Users} />>
                <Route path='/cvp' component={CvpSingle} />
                <Route path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>


        <div style={{minHeight: "100px"}}></div>
      </div>
    );
  }
}

export default App;
