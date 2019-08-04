import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
const proxybase = require('../package.json')["proxy"];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('connects to Express backend', () => {
  axios.get(proxybase + '/api/v1/test').then(res => {
            console.log(res);
        });
  });