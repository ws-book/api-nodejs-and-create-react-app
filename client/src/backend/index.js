import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard.component';
import Member from './pages/member/member.component';

class Backend extends Component {
  render() {
    const Backend = () => (
      <div>
        <Switch>
          <Route path='/admin/member' component={Member}/>
          <Route exact path='/admin*' component={Dashboard}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <Backend/>
      </Switch>
    );
  }
}

export default Backend;
