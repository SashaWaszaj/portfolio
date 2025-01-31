import React, { useState, useEffect } from "react";
import "../Styles CSS/Summary.css";
import profile from "../assets/profile.jpg";
import triangulos from "../assets/triangulos.png";

const Summary = () => {
    const text = "WELCOME.";
    const [displayedText, setDisplayedText] = useState("");
    const typingSpeed = 100;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(interval); 
            }
        }, typingSpeed);

        return () => clearInterval(interval); 
    }, []);
    return (
        <section className="summary-container">
            <div className="home-container">
            <div className="titles-container">
            <h3 className="typing-word">{displayedText}</h3>
            </div>
        </div>
            <div className="summary-section">
                <div className="left-side-section">
                    <div>
                    <img
                            src={ triangulos }
                            alt="triangle-picture"
                            className="triangulos-picture"
                        />
                    </div>
                    <div className="summary-text">
                        <p>
                            Hi! My name is Sasha Waszaj, I am a Full Stack Developer based in Paraguay, passionate about building efficient and scalable web applications. My expertise lies in the MERN stack (MongoDB, Express, React, Node.js), and I have experience in QA automation, testing, and API validation.
                        </p>
                        <p>
                            I have worked on multiple projects, always focusing on clean code, user experience, and performance optimization. I am also experienced in working remotely and collaborating within development teams.
                        </p>
                    </div>
                </div>
                <div className="profile-img-section">
                    <img
                        src={ profile }
                        alt="profile-picture"
                        className="profile-picture"
                    />
                </div>
            </div>
        </section>
    );
};

export default Summary;
