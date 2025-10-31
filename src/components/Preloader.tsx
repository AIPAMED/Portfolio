import  { useEffect, useState } from "react";
import "../styles.css";

const greetings = ["Hello", "مرحبا", "namaste", "bonjour", "hola"];

const TOTAL_DURATION = 3000; // total time for all greetings
const FADE_OUT_MS = 500;

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = TOTAL_DURATION / greetings.length; // time per word

    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, interval);

    // hide after last word
    const hideTimer = setTimeout(() => {
      clearInterval(timer);
      setFadeOut(true);
      setTimeout(() => setVisible(false), FADE_OUT_MS);
    }, TOTAL_DURATION);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay ${fadeOut ? "fade-out" : ""}`}>
      <h1 className="preloader-greeting">{greetings[index] ?? ""}</h1>
    </div>
  );
}
