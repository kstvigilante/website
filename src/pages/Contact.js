import React, { Component } from 'react';
import Header from "../components/header/Header";
import Connect from "../components/connect/Connect";

class Contact extends Component {

  componentDidMount(){
    document.getElementById("contactpage").style.backgroundColor = "#16ac5f";
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Connect />
      </div>
    );
  }
}

export default Contact;