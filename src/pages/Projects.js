import React, { Component } from 'react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProjectList from "../components/Projectlist/Projectlist";

class Projects extends Component {

  componentDidMount(){
    document.getElementById("projectspage").style.backgroundColor = "#16ac5f";
  }

  render() {
    return (
      <div className="container">
        <Header />
        <ProjectList/>
        <Footer />
      </div>
    );
  }
}

export default Projects;