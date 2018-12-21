import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import {Home} from './Home';
import{About} from './About';
import {NavBar} from './NavBar';
import{Projects} from './Projects';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//TODO
// make navbar a HOC
//Add Projects page
//create Portfolio



class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar id="NavBar">
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/projects/">Portfolio</Link>
        </NavBar>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/projects/" component={Projects}/>
{/*             
<Route path="/users/"/> */}
      </div>
      </Router>
    );
  }
}

export default App;
