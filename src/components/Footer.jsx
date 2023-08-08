import React from "react";

const Footer=()=>{

    return(
    <div className="footer-container">
        <div className="left">
        <i class="fas fa-tint humidity-icon"></i>
        <h3>70% <br /><span>Humidity</span></h3>
        </div>
        <div className="right">
       <i class="fas fa-wind wind-speed-icon"></i>
       <h3>70% <br /><span>Humidity</span></h3>
        </div>
    </div>
    )
}


export default Footer;