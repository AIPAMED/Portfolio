import React, { useEffect, useRef, useState } from "react";
import "../styles.css";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // 🔁 triggers each time section enters/leaves viewport
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -15% 0px", // more natural trigger
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { title: "Operation Management", id: "01", percent: 75 },
    { title: "Operation Management", id: "02", percent: 80 },
    { title: "Operation Management", id: "03", percent: 85 },
    { title: "Operation Management", id: "04", percent: 90 },
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="glow-left" />
      <div className="glow-right" />
      <h1>//About Me</h1>
      <p className="about-intro">
        Combining Data-Driven Decision-Making  
        <span className="shady-text"> With Teams Management!</span>
      </p>

      <div className="columns">
        {skills.map((skill, index) => (
          <div className="column" key={index}>
            <div className="grey-outline">
              <div className="skill-1">
                {skill.title} <span>/{skill.id}</span>
              </div>
              <div className="skill-2">Title 2</div>
              <div className="percentage-text">
                {visible ? <AnimatedNumber value={skill.percent} /> : "0%"}
              </div>
              <div
                className={`percentage-box bar-${index}`}
                style={{
                  width: visible ? `${skill.percent}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 🎯 number animation logic */
function AnimatedNumber({ value }) {
  const [num, setNum] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setNum(Math.round(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{num}%</>;
}
