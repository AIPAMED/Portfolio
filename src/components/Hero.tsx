import "../styles.css";
import iyad from "../assets/bg-rm.png";

export default function Hero() {
  const heroSkills = [
    "Project Management",
    "Strategic Planning",
    "Leadership & Coordination",
    "Risk Analysis",
    "Team Communication",
  ];

  return (
    <section className="hero-grid" id="home">
      {/* Right side image */}
      <div className="right">
        <div className="image-wrapper">
          <img src={iyad} alt="Iyad" />
        </div>
      </div>

      {/* Left side text */}
      <div className="left">
        <h1 className="name">
          IYAD Arusi<span className="highlight">.</span>
        </h1>
        <p className="role">
          <span className="highlight">— </span>Project Manager, USA
        </p>

        <p className="commas">“</p>

        <p className="bio">
          Results-oriented project manager with 4+ years of experience leading
          cross-functional teams. Holds an MBA in Healthcare Management and
          currently manages operations for the largest academic department at
          Regent University (800+ students, 150+ faculty).
        </p>

        <button className="contact-btn-hero">
          <a href="#contact">CONTACT WITH ME</a>
        </button>
      </div>

      {/* 🔹 Hero scroll bar (separate but styled the same) */}
      <div className="hero-scroll-bar">
        <div className="hero-scroll-track">
          {Array(8)
            .fill(heroSkills)
            .flat()
            .map((skill, i) => (
              <span key={i}>✦ {skill}</span>
            ))}
        </div>
      </div>
    </section>
  );
}
