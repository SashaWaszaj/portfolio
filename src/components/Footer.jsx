import React from "react";
import "../Styles CSS/Footer.css";

const Footer =() => {
     
    return(
        <div className="main-container-footer">
            <div className="left-container">
                <h2>Let's work together!</h2>
            </div>
            <div className="right-container">
                <h3 className="title-contact">Fallow my socials</h3>
                <ul className="list-container">
                    <li><a href="https://linkedin.com/in/sasha-waszaj-fullstackmern" target="_blank" rel="noopener noreferrer" className="social-link"> Linkedin </a></li>
                    <li><a href="https://github.com/SashaWaszaj" target="_blank" rel="noopener noreferrer" className="social-link"> Github </a></li> 
                </ul>
                <h3 className="title-contact">Contact me</h3>
                <a href="mailto:swaszajf@gmail.com" className="social-link">
                swaszajf@gmail.com
                </a>
            </div>
        </div>
    )
}

export default Footer;