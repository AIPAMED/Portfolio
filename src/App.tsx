import "./styles.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Experiences from "./components/Experinces";
import WorkTogether from "./components/WorkTogether";
import Preloader from "./components/Preloader";
export default function App() {
  return (
    <div className="app-container">
        <Preloader />
        <Navbar />
        <Hero/>
        <About/>
        <Project/>
        <Experiences/>
        <WorkTogether/>
      </div>
    
  );
}
