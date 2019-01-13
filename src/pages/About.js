import React, { Component } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Exp from "../components/experience/Exp";

class About extends Component {

  render() {
    return (
      <div>
        <Header />
        <Exp />
        <Footer />
      </div>
    );
  }
}

export default About;