import React, { Component } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProjectList from "../components/Projectlist/Projectlist";

class Projects extends Component {

  render() {
    return (
      <div>
        <Header />
        <ProjectList/>
        <Footer />
      </div>
    );
  }
}

export default Projects;