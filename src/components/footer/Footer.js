import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className = "container">
        <div className="footer">
            <div className="footer-title">social links</div>
            <div className="social-links">
                <i className="fab fa-facebook-f icons"></i>
                <i className="fab fa-github icons"></i>
                <i className="fab fa-reddit-alien icons"></i>
                <i className="fab fa-linkedin-in icons"></i>
                <i className="fab fa-twitter icons"></i>
                <i className="fab fa-telegram-plane icons"></i>
                <i className="fab fa-quora icons"></i>
            </div>

        </div>
        </div>
    )
};

export default Footer;