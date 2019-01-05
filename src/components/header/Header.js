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
                <Link to = "/" className = "link">home</Link>
                <Link to = "/about" className = "link">about</Link>
                <Link to = "/projects" className = "link">projects</Link>
                <Link to = "/contact" className = "link">contact me</Link>
            </div>
        </div>
    )
};

export default Header;