import React from 'react';
import FactDisplay from './FactDisplay';
import Settings from './Settings';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      count: 3,
      firstname: '',
      lastname: '',
      onlyDev: false,
      visible: false
    }
    this.onJokeButton = this.onJokeButton.bind(this);
    this.onMoreButton = this.onMoreButton.bind(this);
    this.onClearButton = this.onClearButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.onShowSettings = this.onShowSettings.bind(this);
  }

  onShowSettings() {
    const value = !this.state.visible;
    this.setState({
      visible: value
    })
    console.log(this.state);
  }

  onJokeButton() {
    console.log(this.state);
    const addFirstname = this.state.firstname !== '' ? `&firstName=${this.state.firstname}` : '';
    const addLastname = this.state.lastname !== '' ? `&lastName=${this.state.lastname}` : '';
    const limitToDev = this.state.onlyDev === true ? `&limitTo=[nerdy]` : ''
    const endpoint = `http://api.icndb.com/jokes/random/${this.state.count}?exclude=[explicit]&escape=javascript${addFirstname}${addLastname}${limitToDev}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => this.setState({result: data.value}));
  }

  onMoreButton() {
    const addFirstname = this.state.firstname !== '' ? `&firstName=${this.state.firstname}` : '';
    const addLastname = this.state.lastname !== '' ? `&lastName=${this.state.lastname}` : '';
    const limitToDev = this.state.onlyDev === true ? `&limitTo=[nerdy]` : ''
    const endpoint = `http://api.icndb.com/jokes/random/${this.state.count}?exclude=[explicit]&escape=javascript${addFirstname}${addLastname}${limitToDev}`;

    const result = this.state.result;
    fetch(endpoint)
      .then(response => response.json())
      .then(data => [...result, ...data.value])
      .then(result => this.setState({result}));
  }

  onClearButton() {
    this.setState({
      result: '',
      count: 3,
      firstname: '',
      lastname: '',
      onlyDev: false,
      settingVisible: false
    })
  }

  handleCountChange(event) {
    this.setState({ count: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onJokeButton();
  }

  handleNameChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheckboxChange() {
    const value = !this.state.onlyDev;
    this.setState({onlyDev: value});
  }

  render() {
    return (
      <div className="App">
        <img src="imgs/conterfey.png" alt="monochromatic head of chuck norris"/>

        <div className="menu">
          <button onClick={ this.onJokeButton } tabIndex="1">
            Hit me{this.state.result !== '' ? ' again' : ''}!
          </button>
          <button onClick={this.onShowSettings} tabIndex="2">
            Settings&nbsp;
            {this.state.visible ?
              <i className="fas fa-caret-up"></i> :
              <i className="fas fa-caret-down"></i>}
          </button>
        </div>
        {this.state.visible ?
          <Settings
            state={ this.state }
            handleSubmit={ this.handleSubmit }
            handleNameChange={ this.handleNameChange }
            handleCheckboxChange={ this.handleCheckboxChange}
            handleCountChange={this.handleCountChange}
          />
        : ''}

        {this.state.result !== '' ?
          <FactDisplay
            result={ this.state.result }
            count={ this.state.count }
          />
        : ''}
        {this.state.result !== '' ?
          <div>
            <button onClick={ this.onMoreButton } tabIndex="7">Give me { this.state.count } more!</button>
            <button onClick={ this.onClearButton } tabIndex="8">Clear all!</button>
          </div>
        : ''}
      </div>
    );
  }
}

export default App;
