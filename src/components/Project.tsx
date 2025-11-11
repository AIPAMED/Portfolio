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
              AI-powered screening tool addressing university counseling center bottlenecks by conducting structured mental health assessments before human intervention.
            </p>

            <div className="project-img">
              <img src={project} alt="Project preview" />
            </div>

            <h2 className="left-title"> Mental Health Triage System</h2>
          </div>

          {/*  Right Column */}
          <div className="right-column">
            <h4>My Work</h4>
            <h1 className="right-title">My Recent Project That I Done</h1>
            <p className="right-description">
              Recent work integrating Latest Ai Technologies with Medicine
            </p>
            <button className="v-btn" onClick={() => setExpanded(true)}>
              View My Project
            </button>
          </div>
        </>
      ) : (
        <div className="expand-card show">
          <h2>Mental Health Triage System</h2>
          <p>
            AI-powered screening tool addressing university counseling center bottlenecks by conducting structured mental health assessments before human intervention. Routes crisis cases immediately while directing non-urgent students to appropriate resources, reducing counselor triage workload by 60-70%.
          </p>

          <h4>PROJECT DETAILS</h4>
          <p>
            - Structured clinical screening algorithms based on validated assessment tools.
            <br />- Resource matching engine connecting students to appropriate support levels.
            <br />- Reduces 3-6 week wait times through intelligent prioritization.
            <br />- HIPAA-compliant data handling and secure communication channels.
          </p>

          <h4>USED TECHNOLOGIES</h4>
          <ul>
            <li>Natural Language Processing</li>
            <li>Clinical Assessment Frameworks</li>
            <li>React Frontend</li>
            <li>Secure Database</li>
            <li>Architecture API Integration</li>
          </ul>

          <button className="close-btn" onClick={() => setExpanded(false)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
