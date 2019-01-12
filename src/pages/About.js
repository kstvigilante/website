import React, { Component } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

class About extends Component {

    componentDidMount(){
        document.getElementById("aboutpage").style.backgroundColor = "#16ac5f";
    }

  render() {
    return (
      <div className="container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default About;