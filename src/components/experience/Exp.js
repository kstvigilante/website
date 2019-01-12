import React from "react";
import "./Exp.css";

const Exp = () => {
    return (
        <div className="exp-edu">
            <div className="exp">
                <div className = "exp-content">
                    <hr class = "line"></hr>
                    <div className = "cont">
                        <div className = "exp-edu-title">
                            <div><i class="fas fa-book-reader"></i></div>
                            <div><p>my education</p></div>
                        </div>
                        <div className = "school">btech: galgotias university</div>
                        <div className = "marks">7.03 cgpa</div>
                        <div className = "school">12th : st. michael's high school</div>
                        <div className = "marks">87.8%</div>
                        <div className = "school">10th : st. karen's secondary school</div>
                        <div className = "marks">9.8 cgpa</div>
                    </div>                    
                </div>
            </div>
            <div className="edu">
                <div className = "edu-content">
                <hr class = "line"></hr>
                    <div className = "cont">
                        <div className = "exp-edu-title">
                            <div><i class="fas fa-chalkboard-teacher"></i></div>
                            <div><p>my experience</p></div>
                        </div>
                        <div className = "comp">company : innotical solutions pvt. ltd.</div>
                        <div className = "date">7/6/2018 - 7/12/2018</div>
                        <div className = "pos">position : software intern</div>
                        <div className = "comp">company : innotical solutions pvt. ltd.</div>
                        <div className = "date">7/12/2018 - present</div>
                        <div className = "pos">position : software developer</div>
                    </div>     
                </div>
            </div>
        </div>
    );
};

export default Exp;