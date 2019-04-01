// Lack of {curly brackets} indicates this is a default export from the source file
// Using {curly brackets} indicates we are importing a specific export
import React, { Component } from 'react';
import './App.css';
import Turtle from './components/turtle';
import Wolf from './components/wolf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> ALOHA </h1>
        <Turtle/>
        <Wolf/>
      </div>
    );
  }
}

export default App;
