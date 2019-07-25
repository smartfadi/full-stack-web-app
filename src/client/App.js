import React, { Component } from 'react';
import NavBar from './components/AppBar';
import Routes from './components/Routes';

class App extends Component {
  // state = { username: null };

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }

  render() {
    return (
      <div>
        <NavBar />
        <Routes />
      </div>
    );
  }
}
export default App;
