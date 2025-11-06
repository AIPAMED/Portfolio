import { useEffect, useRef, useState } from "react";
import "../styles.css";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: window.innerWidth < 768 ? 0.1 : 0.3, //  smaller threshold for mobile
        rootMargin: window.innerWidth < 768 ? "0px 0px -5% 0px" : "0px 0px -15% 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      title: "Process Optimization",
      id: "01",
      percent: 92,
      subtitle:
        "Streamlining workflows, eliminating bottlenecks, and improving departmental efficiency.",
    },
    {
      title: "Team Coordination",
      id: "02",
      percent: 94,
      subtitle:
        "Cross-functional collaboration, faculty management, and stakeholder communication skills.",
    },
    {
      title: "Strategic Planning",
      id: "03",
      percent: 96,
      subtitle:
        "Long-term program development, resource allocation, and alignment with institutional goals.",
    },
    {
      title: "Data-Driven Operations",
      id: "04",
      percent: 98,
      subtitle:
        "Using analytics, metrics, and evidence-based approaches to guide decisions and measure outcomes.",
    },
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
              {/* 👇 ONLY THIS LINE CHANGED */}
              <div className="skill-2">{skill.subtitle}</div>
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

/* number animation logic */
function AnimatedNumber({ value }: { value: number }) {
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
