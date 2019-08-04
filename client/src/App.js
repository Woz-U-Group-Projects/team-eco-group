import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Body from './components/body/Body';
import FooterPagePro from './screens/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <FooterPagePro />
    </div>
  );
}

export default App;
