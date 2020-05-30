import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/index'
import Card from './components/cardPost/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
    </div>
  );
}

export default App;
