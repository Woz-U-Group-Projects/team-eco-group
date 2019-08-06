import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    fields() {
      return 
    }
    handleClick() {
      alert('Thank You for Donating');
    }
    render() {
      return <button onClick={this.handleClick}>Click Me</button>
    }
  }
  