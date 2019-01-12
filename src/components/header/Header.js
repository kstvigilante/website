import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () =>{
    return (
        <div className = "header">
            <div className = "title">
                <i className="fas fa-copy file-icon"></i>
                <span>online resume</span>
                
            </div>
            <div className = "links">
                <Link to = "/" className = "link" id = "homepage">home</Link>
                <Link to = "/about" className = "link" id = "aboutpage">about</Link>
                <Link to = "/projects" className = "link" id = "projectspage">projects</Link>
                <Link to = "/contact" className = "link" id = "contactpage">contact me</Link>
            </div>
        </div>
    )
};

export default Header;