import "./App.css";
import { headerAnimationConfig } from "./constants";
import { email, socialMedia } from "./constants/Constants";
import Footer from "./components/layout/Footer";
import { HexagonLoader } from "./components/ui/Loader";
import Header from "./components/ui/Header";
import PrimarySection from "./sections/PrimarySection";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Social from "./components/others/Social";

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
          <PrimarySection />
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
