import React from 'react';
import "./Description.css";

const Description = () =>{
    return (
        <div className = "container">
        <div className = "desc">
            
            <div className = "desc-content">
                <div className = "job-title">professional web developer</div>
                <div className = "hello">hello my name is</div>
                <div className = "name">kunwar siddharth thakur</div>
                <div className = "lil-intro">i am full stack developer currently working
                at innotical solution pvt ltd and living in noida
                </div>
                <button className = "connect-btn">connect</button>
                <button className = "hire-btn">hire me</button>
            </div>
            <div className = "avatar-box">
                <div className = "avatar">
                    <div className = "profile-image"></div>
                    <div className = "profile-text">mern stack developer plus smart contracts (eosio blockchain)</div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Description;