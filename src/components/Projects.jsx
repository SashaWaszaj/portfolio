import React, {useState} from "react";
import "../Styles CSS/Projects.css"
import rpmimg from '../assets/rpmsnapshot.jpg';
import UrlShortenerImg from "../assets/url-shortener-snapshot.jpg";
import moldyImg from "../assets/moldy-snapshot.jpg";
import unitaskImg from "../assets/unitask-logo.jpg";
import JSlogo from "../assets/JS-logo.png";
import CSSlogo from "../assets/CSS-logo.png";
import HTMLlogo from "../assets/HTML-logo.png";
import mongologo from "../assets/mongo-logo.png";
import nodelogo from "../assets/node-logo.png";
import reactlogo from "../assets/react.svg";
import rpmVideo from "../assets/rpm-video.mp4";
import urlShortenerVideo from "../assets/url-shortener-video.mp4";
import moldyVideo from "../assets/Moldy-recording.mp4";
import unitaskVideo from "../assets/Unitask-recording.mp4";
import 'font-awesome/css/font-awesome.min.css';


const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            title: "RPM Motos",
            date: "Dec 2024",
            url: "https://rpm-motos.com",
            description: "Web application for the sale and management of motorcycle spare parts and accessories. It allows users to browse a catalog organized in up to 8 categories, filter products, and perform searches intuitively. The platform is developed with React on the frontend and Node.js with Express on the backend, using MongoDB and Mongoose for data management. In addition, it has functionalities to add, edit, and delete products, providing a fluid experience for both customers and administrators.",
            image: rpmimg,
            video: rpmVideo,
            techStack: [HTMLlogo, CSSlogo, JSlogo, reactlogo, nodelogo, mongologo],
            githubLink: "https://github.com/SashaWaszaj/RPM"
        },
        {
            title: "URL Shortener",
            date: "Jan 2025",
            url: "https://url-shortener-service-app.netlify.app/",
            description: "Web application that allows you to shorten long links into more compact and shareable URLs. Users can generate short links, quickly copy and paste them. The platform is built with React on the frontend and Node.js with Express on the backend, using MongoDB to store URLs and their data. It also features a dark and light mode to improve the user experience based on their preferences. Its goal is to improve accessibility and link management.",
            image: UrlShortenerImg,
            video: urlShortenerVideo,
            techStack: [HTMLlogo, CSSlogo, JSlogo, reactlogo, nodelogo, mongologo],
            github: "https://github.com/SashaWaszaj/link-shortener"
        },
        {
            title: "Moldy Tomatoes",
            date: "Jan 2025",
            url: "https://moldy-tomatoes.netlify.app/",
            description: "Web application for discovering, reviewing and rating movies. Users can browse a list of movies and share their opinions through reviews and ratings. Integrated an external API to obtain movie data in combination with and internal API for the creation of reviews. Developed with React on the frontend and Node.js with Express on the backend, the application connects to a MongoDB database to manage movie and review information.",
            image: moldyImg,
            video: moldyVideo,
            techStack: [HTMLlogo, CSSlogo, JSlogo, reactlogo, nodelogo, mongologo],
            github: "https://github.com/SashaWaszaj/Moldy-Tomatoes"
        },
        {
            title: "UniTask App",
            date: "Sep 2024",
            url: "https://unitask-app.netlify.app/",
            description: "Web application designed for efficient task management, allowing users to create, edit and delete tasks with a dynamic calendar that allows scheduled tasks to be deployed on specific dates. With an intuitive interface developed in React and a backend in Node.js with Express, the platform stores tasks in MongoDB, ensuring a fluid and organized experience. Its goal is to improve productivity and facilitate the management of to-do lists in a simple and effective way.",
            image: unitaskImg,
            video: unitaskVideo,
            techStack: [HTMLlogo, CSSlogo, JSlogo, reactlogo, nodelogo, mongologo],
            github: "https://github.com/SashaWaszaj/Unitask-App"
        }
    ];

    return (
        <div className="main-container">
            <div className="titles-div">
            <h2 className="main-title"> My Work </h2>
            <p>A collection of projects I've worked on.</p>
            </div>
            <div className="projects-main-container">
            {projects.map((project, index) => (
                <div key={index} className="project-box">
                    <div className="img-div">
                        <div className="title-div">
                            <h3>{project.title}</h3>
                            <div>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="fa-icon-link">
                            <i className="fa fa-github" aria-hidden="true" style={{fontSize: "large", color: "#1e1f1e"}}></i></a></div>
                            <div>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="fa-icon-link">
                            <i className="fa fa-link" aria-hidden="true" style={{fontSize: "large", color: "#1e1f1e"}}></i></a></div>
                            <p>{project.date} </p>
                        </div>
                        </div>
                        <div>
                        <p>{project.description}</p>
                        </div>
                        <div>
                        <a  href={project.url}
                            target="_blank"
                            className="media-container"
                            onMouseEnter={() => setHoveredProject(index)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {hoveredProject === index ? (
                                <video 
                                    className="project-video"
                                    src={project.video} 
                                    autoPlay 
                                    muted 
                                    loop 
                                />
                            ) : (
                                <img className="project-img" src={project.image} alt={project.title} />
                            )}
                        </a>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Projects;