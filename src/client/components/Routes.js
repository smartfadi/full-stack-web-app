import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Signup from './Signup';
import HomePage from './HomePage';

export default class Foo extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
}
