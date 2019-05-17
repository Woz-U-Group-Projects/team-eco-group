import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';

/* THE CLASS BELOW IS HOW YOU CAN IMPLEMENT THE API INTO YOUR PROJECT */
/*
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
} */

class App extends Component {
  render() {
    return(
      <Home />
    );
  }
}

export default App;
