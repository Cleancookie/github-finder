import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <h1>Hello from react</h1>
      </div>
    );
  }
}

export default App;
