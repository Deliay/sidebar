import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SideBar } from './SideBar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar enableTest="true"/>
      </div>
    );
  }
}

export default App;
