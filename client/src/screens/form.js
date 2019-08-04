import React from 'react';
import axios from 'axios';

export default class Foo extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      alert('Thank You for Donating');
    }
    render() {
      return <button onClick={this.handleClick}>Click Me</button>
    }
  }
  