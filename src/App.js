import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom'

import Header from './components/header/index'
import Home from './pages/homePage/Home'
import Profile from './pages/profile/Profile'

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <div className="Navbar">
          <NavLink className="icons" to="/homePage">home</NavLink>
          <NavLink className="icons" to="/profile">person</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/homePage" component={Home}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
