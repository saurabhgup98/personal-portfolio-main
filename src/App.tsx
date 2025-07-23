import "./App.css";
import Social from "./components/Social";
import { headerAnimationConfig } from "./constants";
import { email, socialMedia } from "./constants/Constants";
import Footer from "./components/others/Footer";
import HexagonLoader from "./components/others/HexagonLoader";
import Header from "./components/headers/Header";
import PrimarySection from "./sections/PrimarySection";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

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
        <div className="section-two">
          <About />
        </div>
        <div className="section-three">
          <Experience />
        </div>
        <div className="section-four">
          <Projects />
        </div>
        <div className="section-four">
          <Contact />
        </div>
        <Footer />       
      </div>
      
    </HexagonLoader>
  );
}

export default App;
