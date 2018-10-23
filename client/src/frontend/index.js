import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/home.component';

class Frontend extends Component {
  render() {
    const Frontend = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <Frontend/>
      </Switch>
    );
  }
}

export default Frontend;
