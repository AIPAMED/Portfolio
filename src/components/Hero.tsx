import "../styles.css";
import iyad from "../assets/compressed.jpg";

export default function Hero() {
  return (
    <section className="hero-grid" id="home">


      {/*  Right side image */}
      <div className="right">
        <div className="image-wrapper">
          <img src={iyad} alt="Iyad" />
          {/*
          <div className="price-tag">
            <span className="highlight">$</span>75.00
            <div className="hourly-rate">Hourly Rate</div>
          </div>
          */}
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
          Results-oriented project manager with 7+ years of experience leading
          cross-functional teams. Holds an MBA in Healthcare Management and
          currently manages operations for the largest academic department at
          Regent University (800+ students, 150+ faculty).
        </p>

        <button className="contact-btn-hero">
          <a href="#contact">CONTACT WITH ME</a>
        </button>
      </div>
    </section>
  );
}
