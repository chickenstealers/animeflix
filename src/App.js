import React, {Component} from 'react';
import Login from './pages/main/Login';
import Main from './pages/main/Main';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
