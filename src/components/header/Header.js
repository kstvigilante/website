import React, { Component } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import M from 'materialize-css';

class Header extends Component {

    componentDidMount() {
        const sideNav = document.querySelector(".sidenav");
        M.Sidenav.init(sideNav, {});
    }

    render() {
        return (
            <div className="header">
                <nav>
                    <div className = "container">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo"><div className = "cust-logo"><i className="fas fa-copy file-icon"></i><span>resume</span></div></a>
                        <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/" className="link" id="homepage">home</Link></li>
                            <li><Link to="/about" className="link" id="aboutpage">about</Link></li>
                            <li><Link to="/projects" className="link" id="projectspage">projects</Link></li>
                            <li><Link to="/contact" className="link" id="contactpage">contact me</Link></li>
                        </ul>
                    </div>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-nav">
                    <li>
                        <Link to="/" className="link" id="homepage">home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link" id="aboutpage">about</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="link" id="projectspage">projects</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link" id="contactpage">contact me</Link>
                    </li>

                </ul>
            </div>
        )
    }
};

export default Header;

