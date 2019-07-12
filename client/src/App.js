import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/body/Body';
import Axios1 from './components/Axios1';

function App() {
  return (
    <div className="App">
      <Navbar />,
      <Axios1 />
    </div>
  );
}

export default App;
