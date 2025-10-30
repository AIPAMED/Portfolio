import React, { useState, useEffect } from "react";
import "../styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // 👇 detect which section is visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // adjust sensitivity
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleLinkClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Hamburger always fixed top-left */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar / Nav links */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li>
          <a
            href="#home"
            className={active === "#home" ? "active" : ""}
            onClick={() => handleLinkClick("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={active === "#projects" ? "active" : ""}
            onClick={() => handleLinkClick("#projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className={active === "#experience" ? "active" : ""}
            onClick={() => handleLinkClick("#experience")}
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={active === "#contact" ? "active" : ""}
            onClick={() => handleLinkClick("#contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
