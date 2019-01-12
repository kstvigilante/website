import React from 'react';
import "./Projectlist.css";

const Projectlist = () =>{
    return(
        <div className = "projectList">
            <div className = "project">
                <hr></hr>
                <div>eosbluff</div>
                <div className = "proImage" id = "eosbluffImg"></div>
                <div><a href = "https://eosbluff.io" target = "_blank" rel="noopener noreferrer">https://eosbluff.io/</a></div>
                <div>github</div>
                <div>contribution</div>
                <div>technologies used</div>
            </div>

            <div className = "project">
                <hr></hr>
                <div>utopialand</div>
                <div className = "proImage" id = "utopialandImg"></div>
                <div><a href = "https://utopialand.org" target = "_blank" rel="noopener noreferrer">https://utopialand.org/</a></div>
                <div>github</div>
                <div>contribution</div>
                <div>technologies used</div>
            </div>

            <div className = "project">
                <hr></hr>
                <div>utopia dapps</div>
                <div className = "proImage" id = "utopiadappsImg"></div>
                <div><a href = "https://identity.utopialand.org" target = "_blank" rel="noopener noreferrer">https://identity.utopialand.org</a></div>
                <div>github</div>
                <div>contribution</div>
                <div>technologies used</div>
            </div>

            <div className = "project">
                <hr></hr>
                <div>this website</div>
                <div className = "proImage" id = "thiswebsiteImg"></div>
                <div><a href = "#" target = "_blank" rel="noopener noreferrer">this website</a></div>
                <div>github</div>
                <div>contribution</div>
                <div>technologies used</div>
            </div>
        </div>
    )
}

export default Projectlist;