import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      count: 3
    }
    this.onButtonRandom = this.onButtonRandom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
  }

  onButtonRandom() {
    const endpoint = `http://api.icndb.com/jokes/random/${this.state.count}?exclude=[explicit]&escape=javascript`;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => this.setState({result: data.value}));
  }

  handleCountChange(event) {
    this.setState({ count: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onButtonRandom();
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <img src="imgs/conterfey.png" alt="monochromatic head of chuck norris"/>

        <form onSubmit={this.handleSubmit}>
          <label>
            Hits:&nbsp;
            <input type="number" min="1" value={this.state.count} onChange={this.handleCountChange}/>
          </label>
        </form>
        <button onClick={this.onButtonRandom}>Hit me!</button>

        {this.state.result !== [] ?
          <FactDisplay result={this.state.result}/>
        : ''}
      </div>
    );
  }
}

const FactDisplay = (props) => {
  // console.log(props.result)
  const tweetHref = "https://twitter.com/intent/tweet?text=";
  return (
    props.result.map((el, i) =>
      <div className="fact" key={`${el.id}_${i}`}>
        <p>{el.joke}</p>
        <a href={`${tweetHref}${encodeURIComponent(el.joke)}`}><i className="fab fa-twitter"></i> Tweet</a>
        {/* Joke Button */}
      </div>
  ));
}

export default App;
