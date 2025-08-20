import "./App.css";
import { headerAnimationConfig, email, socialMedia } from "./constants/data";
import Footer from "./components/layout/Footer";
import { HexagonLoader } from "./components/ui/Loader";
import Header from "./components/ui/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Social from "./components/layout/Social";

function App() {
  return (
    <HexagonLoader>
      <Header animationConfig={headerAnimationConfig} />
      <div className="social-media-link-section">
        <Social socialMedia={socialMedia} />
      </div>
      <div className="vertical-Right-text">
        <div className="vertical-right-text-content">{email}</div>
        <div className="vertical-line"></div>
      </div>
      <div className="page-main-content">
        <div className="section-one">
          <Hero />
        </div>
        <div className="section-two" id="about">
          <About />
        </div>
        <div className="section-three" id="experience">
          <Experience />
        </div>
        <div className="section-four" id="projects">
          <Projects />
        </div>
        <div className="section-five" id="contact">
          <Contact />
        </div>
        <Footer />       
      </div>
      
    </HexagonLoader>
  );
}

export default App;
