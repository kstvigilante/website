import React from 'react';
import "./Projectlist.css";

const Projectlist = () =>{
    return(
        <div className = "projectList">
            <div className = "project">
                <hr></hr>
                <div>eosbluff</div>
                <div className = "proImage" id = "eosbluffImg"></div>
                <div>link : </div>
                <div><a href = "https://eosbluff.io" target = "_blank" rel="noopener noreferrer">https://eosbluff.io/</a></div>
                <div>contribution : </div>
                <div className = "contribution"><p>developed smart contract(eosio blockchain)</p></div>
                <div>technologies used : </div>
                <div className = "tech-used">
                    <div className = "tech">css</div>
                    <div className = "tech">html</div>
                    <div className = "tech">javascript</div>
                    <div className = "tech">react</div>
                    <div className = "tech">c++</div>        
                </div>
            </div>

            <div className = "project">
                <hr></hr>
                <div>utopialand</div>
                <div className = "proImage" id = "utopialandImg"></div>
                <div>link : </div>
                <div><a href = "https://utopialand.org" target = "_blank" rel="noopener noreferrer">https://utopialand.org/</a></div>
                <div>contribution : </div>
                <div className = "contribution"><p>developed front end</p></div>
                <div>technologies used : </div>
                <div className = "tech-used">
                    <div className = "tech">css</div>
                    <div className = "tech">html</div>
                    <div className = "tech">javascript</div>
                    <div className = "tech">meteor</div>
                    <div className = "tech">blaze template</div>
                </div>
            </div>

            <div className = "project">
                <hr></hr>
                <div>utopia dapps</div>
                <div className = "proImage" id = "utopiadappsImg"></div>
                <div>link : </div>
                <div><a href = "https://identity.utopialand.org" target = "_blank" rel="noopener noreferrer">https://identity.utopialand.org</a></div>
                <div>contribution : </div>
                <div className = "contribution"><p>developed front end + smart contracts</p></div>
                <div>technologies used : </div>
                <div className = "tech-used">
                    <div className = "tech">css</div>
                    <div className = "tech">html</div>
                    <div className = "tech">javascript</div>
                    <div className = "tech">meteor</div>
                    <div className = "tech">blaze template</div>
                </div>
            </div>

            <div className = "project">
                <hr></hr>
                <div>this website</div>
                <div className = "proImage" id = "thiswebsiteImg"></div>
                <div>link : </div>
                <div><a href = "#" target = "_blank" rel="noopener noreferrer">this website</a></div>
                <div>contribution : </div>
                <div className = "contribution"><p>developed front end</p></div>
                <div>technologies used : </div>
                <div className = "tech-used">
                    <div className = "tech">css</div>
                    <div className = "tech">html</div>
                    <div className = "tech">javascript</div>
                    <div className = "tech">react</div>
                </div>
            </div>
        </div>
    )
}

export default Projectlist;