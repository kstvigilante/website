import React from "react";
import "./Connect.css";

const Connect = () =>{
    return(
        <div className = "connect-cont">
            <div className = "contact-details">
                <hr className = "line"></hr>
                <div>email : kst85077@gmail.com</div>
                <div>phone number : 9654210850</div>
                <div>github : https://github.com/kstvigilante</div>
            </div>
            <div className = "social-media-details">
                <hr className = "line"></hr>
                <div>connect with me on various social media platforms</div>
                <div className = "tangerine-font">facebook<i className="fab fa-facebook-f icons"></i></div>
                <div className = "tangerine-font">github<i className="fab fa-github icons"></i></div>
                <div className = "tangerine-font">reddit<i className="fab fa-reddit-alien icons"></i></div>
                <div className = "tangerine-font">linkedin<i className="fab fa-linkedin-in icons"></i></div>
                <div className = "tangerine-font">twitter<i className="fab fa-twitter icons"></i></div>
                <div className = "tangerine-font">telegram<i className="fab fa-telegram-plane icons"></i></div>
                <div className = "tangerine-font">quora<i className="fab fa-quora icons"></i></div>
            </div>
        </div>
    );
};

export default Connect;