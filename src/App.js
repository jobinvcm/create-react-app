import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CvpSingle from './Components/CvpSingle';
import Firebase , { FirebaseContext } from './Components/Firebase';
import Navigation from './Components/Navigation';
import Users from './Pages/Users';
import Login from './Pages/Login';
import Database from './Pages/Database';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={createMuiTheme()}>
          <FirebaseContext.Provider value={new Firebase()}>
            <Router>
              <div>
                <Navigation />
                <Switch>
                  <Route path='/user' component={Users} />>
                  <Route path='/cvp' component={CvpSingle} />
                  <Route path='/login' component={Login} />
                  <Route path='/database' component={Database} />
                </Switch>
              </div>
            </Router>
          </FirebaseContext.Provider>
        </MuiThemeProvider>


        <div style={{minHeight: "100px"}}></div>
      </div>
    );
  }
}

export default App;
