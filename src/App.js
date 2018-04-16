import React from "react";
import FactDisplay from "./FactDisplay";
import Settings from "./Settings";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      count: 3,
      firstname: "",
      lastname: "",
      onlyDev: false,
      visible: false
    }
    this.onJokeButton = this.onJokeButton.bind(this);
    this.onClearButton = this.onClearButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSettingsChange = this.handleSettingsChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.onShowSettings = this.onShowSettings.bind(this);
  }

  onShowSettings() {
    const value = !this.state.visible;
    this.setState({
      visible: value
    })
  }

  onJokeButton(event) {
    const addFirstname = this.state.firstname !== "" ? `&firstName=${this.state.firstname}` : "";
    const addLastname = this.state.lastname !== "" ? `&lastName=${this.state.lastname}` : "";
    const limitToDev = this.state.onlyDev === true ? `&limitTo=[nerdy]` : "";
    const endpoint = `http://api.icndb.com/jokes/random/${this.state.count}?exclude=[explicit]&escape=javascript${addFirstname}${addLastname}${limitToDev}`;

    const result = this.state.result;

    if(event.target.name === "more") {
      fetch(endpoint)
      .then(response => response.json())
      .then(data => this.setState({result: [...result, ...data.value]}))
    } else {
      fetch(endpoint)
      .then(response => response.json())
      .then(data => this.setState({result: data.value}))
    }
  }

  onClearButton() {
    this.setState({
      result: "",
      count: "3",
      firstname: "",
      lastname: "",
      onlyDev: false,
      settingVisible: false
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onJokeButton();
  }

  handleSettingsChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleCheckboxChange() {
    const value = !this.state.onlyDev;
    this.setState({onlyDev: value});
  }

  render() {
    const hitMe = `Hit me${this.state.result !== "" ? " again" : ""}!`
    return (
      <div className="App">
        <img src="imgs/conterfey.png" alt="monochromatic head of chuck norris"/>

        <div className="menu">
          <button
            onClick={ this.onJokeButton }
            tabIndex="1"
          >
            { hitMe }
          </button>
          <button
            onClick={this.onShowSettings}
            tabIndex="1"
          >
            Settings
            {' '}
            {this.state.visible ?
              <i className="fas fa-caret-up"></i> :
              <i className="fas fa-caret-down"></i>}
          </button>
        </div>
        {this.state.visible &&
          <Settings
            count={ this.state.count }
            firstname={ this.state.firstname }
            lastname={ this.state.lastname }
            onlyDev={ this.state.onlyDev }
            handleSubmit={ this.handleSettingsChange }
            handleSettingsChange={ this.handleSettingsChange }
            handleCheckboxChange={ this.handleCheckboxChange}
          />}

        {this.state.result !== "" &&
          <FactDisplay
            result={ this.state.result }
          />}
        {this.state.result !== "" &&
          <div>
            <button
              onClick={ this.onJokeButton }
              tabIndex="3"
              name="more"
            >
              Give me { this.state.count } more!
            </button>
            <button
              onClick={ this.onClearButton }
              tabIndex="3"
            >
              Clear all!
            </button>
          </div>}
      </div>
    );
  }
}

export default App;
