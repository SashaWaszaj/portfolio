import React from "react";
import "../Styles CSS/NavBar.css";

const NavBar = () => {
    return(
        <nav className="main-container-navbar">
            <div className="name-container">
                <p className="name">Sasha</p>
                <p className="name">Waszaj</p>
            </div>
            <div className="link-container">
                <a href="mailto:swaszajf@gmail.com" className="fa-icon-link">
                <i className="fa fa-envelope" aria-hidden="true" style={{ marginTop: "10px", fontSize: "large", color: "#000000", marginRight: "15px" }}></i>
                </a>
                <a href="https://github.com/SashaWaszaj" target="_blank" rel="noopener noreferrer" className="fa-icon-link">
                <i className="fa fa-github" aria-hidden="true" style={{marginTop:"10px", fontSize: "large", color: "#000000", marginRight:"15px"}}></i></a>
                <a href="https://linkedin.com/in/sasha-waszaj-fullstackmern" target="_blank" rel="noopener noreferrer" className="fa-icon-link">
                <i className="fa fa-linkedin-square" aria-hidden="true" style={{marginTop:"10px", fontSize: "large", color: "#000000", marginRight:"15px"}}></i></a>
            </div>
        </nav>
    )
}

export default NavBar;