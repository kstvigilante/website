import React, { Component } from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Description from "./components/description/Description";

class App extends Component {
  render() {
    return (
      <div className = "container">
        <Header/>
        <Description/>
        <Footer/>
      </div>
    );
  }
}

export default App;
