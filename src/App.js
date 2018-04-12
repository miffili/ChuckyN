import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      count: 3
    }
    this.onButtonRandom = this.onButtonRandom.bind(this);
  }

  onButtonRandom() {
    const endpoint = `http://api.icndb.com/jokes/random/${this.state.count}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => this.setState({result: data.value}));
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <img src="imgs/conterfey.png"/>
        <JokeButton random={this.onButtonRandom}/>
        {this.state.result !== [] ?
          <FactDisplay result={this.state.result}/>
        : ''}
      </div>
    );
  }
}

const FactDisplay = (props) => {
  console.log(props.result)
  return (
    props.result.map((el, i) =>
      <div className="fact" key={`${el.id}_${i}`}>
        <p>{el.joke}</p>
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(el.joke)}`}><i className="fab fa-twitter"></i> Tweet</a>
      </div>
  ));
}

const JokeButton = (props) => {
  return (
    <button onClick={props.random}>Hit me!</button>
  );
}

export default App;
