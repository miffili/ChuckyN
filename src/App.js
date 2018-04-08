import React, { Component } from 'react';
import conterfey from './chuck_norris_dancin___by_jesgrad07.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={conterfey}/>
        <h1>Whoops, there's nothing here yet.</h1>
        <p>By the way: Chuck Norris doesn't need try-catch, exceptions are too afraid to raise.</p>
      </div>
    );
  }
}

export default App;
