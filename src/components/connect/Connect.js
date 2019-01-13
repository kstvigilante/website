import React from "react";
import "./Connect.css";

const Connect = () =>{
    return(
        <div className = "container">
        <div className = "connect-cont">
            <div className = "contact-details">
                <hr className = "line"></hr>
                <div><span>email : </span>kst85077@gmail.com</div>
                <div><span>phone number : </span>9654210850</div>
            </div>
            <div className = "social-media-details">
                <hr className = "line"></hr>
                <div className = "title-social">connect with me on various platforms</div>
                <div className = "tangerine-font">
                    facebook<a href = "https://www.facebook.com/the.vigilante123" target = "_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f icons"></i></a>
                </div>
                <div className = "tangerine-font">
                    github<a href = "https://github.com/kstvigilante" target = "_blank" rel="noopener noreferrer">
                    <i className="fab fa-github icons"></i></a>
                </div>
                <div className = "tangerine-font">
                    reddit<a href = "https://www.reddit.com/user/mrkstnew" target = "_blank" rel="noopener noreferrer">
                    <i className="fab fa-reddit-alien icons"></i></a>                    
                </div>
                <div className = "tangerine-font">
                    linkedin<a href = "https://www.linkedin.com/in/kunwar-siddharth-326675107/" target = "_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in icons"></i></a>               
                </div>
                <div className = "tangerine-font">
                    twitter<a href = "https://twitter.com/sid9654" target = "_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter icons"></i></a>
                </div>
                <div className = "tangerine-font">
                    telegram<a href = "https://t.me/ilikedonuts" target = "_blank" rel="noopener noreferrer">
                    <i className="fab fa-telegram-plane icons"></i></a>
                </div>
                <div className = "tangerine-font">
                    quora<a href = "https://www.quora.com/profile/Kunwar-Siddharth-1" target = "_blank" rel="noopener noreferrer">
                    <i className="fab fa-quora icons"></i></a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Connect;