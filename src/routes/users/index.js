import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import { isLoggedIn } from '../../helpers/authentication';
import Dashboard from '../dashboard';
import Success from './success';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/success" component={Success} />
        <Route path="/login" component={Login} />
        <Route path="" render={
          (props) => {
            if (isLoggedIn()){
              return <Dashboard />
            }
            return <Login />
          }
        }/>
      </Switch>
    );
  }
}

export default App;
