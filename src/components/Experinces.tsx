import { useState } from "react";
import resumeFile from "../assets/Iyad-Arusi.pdf";
import "../styles.css";

export default function Experiences() {
  const [active, setActive] = useState<string>("MBA");

  const content: Record<
    string,
    { about: string; tags: string[] }
  > = {
    "Department Manager": {
      about:
        "Lead strategic and operational management of the university’s largest department (800+ students, 150+ faculty), acting as the primary liaison between academic leadership, external partners, and internal stakeholders.",
      tags: [
        "Strategic Leadership",
        "Operations Management",
        "Stakeholder Communication",
      ],
    },
    "Research Project Manager": {
      about:
        "Directed clinical operations for pregnancy-related hematologic research at University of Toronto. Managed regulatory compliance for 7 international trials, coordinated multi-site ethics approvals, and maintained data integrity standards resulting in three peer-reviewed publications in high-impact journals.",
      tags: [
        "Project Lifecycle Management",
        "Data Analysis",
        "Cross-Functional Coordination",
      ],
    },
    "Team Leader (Medicine)": {
      about:
        "Led multidisciplinary care teams under high-stress, resource-limited conditions, developing critical leadership, prioritization, and decision-making skills transferable to fast-paced business environments.",
      tags: ["Crisis Management", "Team Leadership", "Decision Making"],
    },
    MBA: {
      about:
        "Regent University, Virginia Beach, USA | 2021 – 2023 Focus on Strategic Planning, Data-Driven Operations, Organizational Leadership.",
      tags: [
        "Strategic Planning",
        "Data-Driven Decision Making",
        "Organizational Leadership",
      ],
    },
    "Doctor of Medicine": {
      about: "University of Aleppo, Syria | 2009 – 2015",
      tags: ["Analytical Thinking", "Problem Solving", "Process Optimization"],
    },
  };

  const items = Object.keys(content);
  const current = content[active];

  return (
    <section className="what-i-do" id="experience">
      {/*  LEFT MENU */}
      <div className="left-menu">
        <div className="menu-top">//EXPERIENCES</div>

        <ul>
          {items.map((it: string) => (
            <li
              key={it}
              className={`menu-item ${active === it ? "active" : ""}`}
              onClick={() => setActive(it)}
            >
              {it}
            </li>
          ))}
        </ul>
      </div>

      {/*  RIGHT PANEL */}
      <div className="right-panel full-text">
        <hr className="divider" />

        <div className="about-block">
          <h6>DESCRIPTION</h6>
          <p>{current.about}</p>
        </div>

        <hr className="divider" />

        <div className="tags-row">
          {current.tags.map((tag: string, i: number) => (
            <span key={i} className={`tag ${i === 1 ? "tag-active" : ""}`}>
              {tag}
            </span>
          ))}
        </div>

        {/*  Download Resume */}
        <a
          href={resumeFile}
          download="Iyad-Arusi.pdf"
          className="download-resume"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
