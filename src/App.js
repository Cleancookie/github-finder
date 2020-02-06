import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <UserItem />
      </div>
    );
  }
}

export default App;
