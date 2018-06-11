import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import AppRedux from './App_redux';
import App from './App';

class Routes extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={App} />
        <Route path="/states" component={App} />
        <Route path="/redux" component={AppRedux} />
      </div>
    );
  }
}

export default Routes;