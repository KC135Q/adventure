import React, { Component } from 'react';
import './App.css';
import Game from './components/Game'

const bgGradient = {
    backgroundColor: "#010101"
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={bgGradient}>
          <Game />
        </header>
      </div>
    );
  }
}

export default App;
