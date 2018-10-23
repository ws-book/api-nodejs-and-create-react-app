import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Frontend from './frontend';
import Backend from './backend';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path='/admin*' component={Backend}/>
          <Route exact path='/*' component={Frontend}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
