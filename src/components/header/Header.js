import React from 'react';
import "./Header.css";

const Header = () =>{
    return (
        <div className = "header">
            <div className = "title">
                <i className="fas fa-copy file-icon"></i>
                <span>online resume</span>
                
            </div>
            <div className = "links">
                <div className = "link">home</div>
                <div className = "link">about me</div>
                <div className = "link">projects</div>
                <div className = "link">contact me</div>
            </div>
        </div>
    )
};

export default Header;