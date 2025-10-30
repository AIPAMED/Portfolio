import React, { useEffect, useRef, useState } from "react";
import "../styles.css";
import ContactCard from "./ContactCard";

const WorkTogether = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "none";
            void entry.target.offsetWidth;
            entry.target.style.animation = "dropIn 1.2s ease-out forwards";
          }
        });
      },
      { threshold: 0.4 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Your skill words (looped infinitely)
  const skills = [
    "Project Management",
    "Strategic Planning",
    "Leadership & Coordination",
    "Risk Analysis",
    "Team Communication",
  ];

  return (
    <section className="work-section" id="contact">
      <div className="glow-right"></div>

      {/* 🔹 Scrolling Bar */}
      <div className="scroll-bar">
        <div className="scroll-track">
          {Array(8)
            .fill(skills)
            .flat()
            .map((skill, i) => (
              <span key={i}>✦ {skill}</span>
            ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="work-content">
        <div className="long-name">IYAD</div>
        <h1 ref={headingRef}>
          LET’S WORK <br /> TOGETHER
        </h1>
        <button className="contact-btn" onClick={() => setShowContact(true)}>
          CONTACT WITH ME
        </button>

        {/* Contact Card */}
        <ContactCard show={showContact} onClose={() => setShowContact(false)} />
      </div>

      <footer className="footer">©2025 DEVELOPED BY REHAB ELKADIM</footer>
    </section>
  );
};

export default WorkTogether;
