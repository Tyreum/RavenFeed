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
        <NavLink to="/homePage">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
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
