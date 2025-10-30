import { useState } from "react";
import "../styles.css";
import project from "../assets/project1.png";

export default function Project() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project" id="projects">
      {!expanded ? (
        <>
          {/*  Left Column */}
          <div className="left-column">
            <div className="about-btn">ABOUT PROJECT</div>
            <p className="left-description">
              ABOUT PROJECT BY UNDERSTANDING THE USER NEEDS AND MAPPING OUT THE
              APP FLOW THROUGH WIREFRAMES.
            </p>

            <div className="project-img">
              <img src={project} alt="Project preview" />
            </div>

            <h2 className="left-title">PROJECT TITLE GOES HERE</h2>
          </div>

          {/*  Right Column */}
          <div className="right-column">
            <h4>My Work</h4>
            <h1 className="right-title">My Recent Project That I Done</h1>
            <p className="right-description">
              I start by understanding the needs and mapping out the app through
              wireframes
            </p>
            <button className="v-btn" onClick={() => setExpanded(true)}>
              View My Project
            </button>
          </div>
        </>
      ) : (
        <div className="expand-card show">
          <h2>PROJECT TITLE GOES HERE</h2>
          <p>
            This project focuses on improving user experience through a clear
            structure and interactive design. I handled UI layout, responsive
            behavior, and optimized performance to ensure seamless experience
            across devices. The goal was to create an engaging and accessible
            interface that feels intuitive and clean.
          </p>

          <h4>PROJECT DETAILS</h4>
          <p>
            - Built with React and styled-components.
            <br />- Implemented dynamic animations using Framer Motion.
            <br />- Integrated reusable components for scalability.
            <br />- Focused on accessibility and user flow.
          </p>

          <h4>USED TECHNOLOGIES</h4>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>CSS Modules</li>
            <li>Framer Motion</li>
          </ul>

          <button className="close-btn" onClick={() => setExpanded(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
