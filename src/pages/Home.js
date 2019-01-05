import React, { Component } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Description from "../components/description/Description";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Description />
        <Footer />
      </div>
    );
  }
}

export default Home;