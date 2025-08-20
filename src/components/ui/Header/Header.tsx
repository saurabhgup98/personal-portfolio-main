import { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../layout/Logo/Logo";
import Button from "../Button/Button";

interface AnimationConfig {
  common: {
    animationName: string;
    animationDuration: string;
    animationFillMode: string;
    animationTimingFunction: string;
    transform: string;
  };
  delays: {
    left: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    button: string;
  };
}

const Header = ({ animationConfig }: { animationConfig: AnimationConfig }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const { common, delays } = animationConfig;

  const animStyle = {
    animationName: common.animationName,
    animationDuration: common.animationDuration,
    animationFillMode: common.animationFillMode,
    animationTimingFunction: common.animationTimingFunction,
    transform: common.transform,
  };

  const navItems = [
    { number: "01", text: "About", id: "about" },
    { number: "02", text: "Experience", id: "experience" },
    { number: "03", text: "Work", id: "projects" },
    { number: "04", text: "Contact", id: "contact" },
  ];

  return (
    <header className={`main-header ${showHeader ? "show" : "hide"}`}>
      {/* Left Section - Logo */}
      <div className="main-header-left-section">
        <div
          className="logo-container anim flex-row-all-center"
          style={{ ...animStyle, animationDelay: delays.left }}
        >
          <Logo />
        </div>
      </div>

      {/* Right Section - Navigation + Button Group */}
      <div className="main-header-right-section">
        {/* Navigation */}
        <nav className="nav-links-container desktop-nav">
          {navItems.map((item, index) => (
            <div
              key={item.id}
              className="nav-link"            
              style={{ ...animStyle, animationDelay: delays[`item${index + 1}` as keyof typeof delays] }}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="nav-number">{item.number}.</span> 
              <span className="nav-text">{item.text}</span>
            </div>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="btn-container">
          <div
            className="anim"
            style={{ ...animStyle, animationDelay: delays.button }}
          >
            <Button 
              name="Resume" 
              action={() => window.open("/resume.pdf", "_blank")}
              tooltipText=""
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-items">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="mobile-nav-link"
                onClick={() => handleNavClick(item.id)}
              >
                <span className="nav-number">{item.number}.</span> 
                <span className="nav-text">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mobile-resume-section">
            <button
              onClick={() => window.open("/resume.pdf", "_blank")}
              className="mobile-resume-btn"
            >
              Resume
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
