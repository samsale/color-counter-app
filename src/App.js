import React, { Component } from 'react';
import './App.css';
import Header from './header.js'
import BoxAdder from './boxadder.js'

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header/>
      <div>
      <BoxAdder />
      </div>
      </div>
    )
  }
}

export default App;
