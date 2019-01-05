import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path = "/" component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/projects" component = {Projects}/>
          <Route path = "/contact" component = {Contact}/>
        </div>
      </Router>

    );
  }
}

export default App;
