import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }

  render() {
    return(
      <div>
        <h1>This is React</h1>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
