import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import {Home} from './Home';
import {NavBar} from './NavBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar id="NavBar">
          <Link to="/about/">About</Link>
          <Link to="/users/">Portfolio</Link>
        </NavBar>
        <Home/>
{/*       <Route path="/" exact component={Index} />
      <Route path="/about/"/>
      <Route path="/users/"/> */}
      </div>
      </Router>
    );
  }
}

export default App;
