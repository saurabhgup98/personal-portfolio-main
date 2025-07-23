// Header.tsx
import { useEffect, useState } from "react";
import "./css/Header.css";
import Logo from "../others/Logo";

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

  const { common, delays } = animationConfig;

  const animStyle = {
    animationName: common.animationName,
    animationDuration: common.animationDuration,
    animationFillMode: common.animationFillMode,
    animationTimingFunction: common.animationTimingFunction,
    transform: common.transform,
  };

  return (
    <header className={`main-header ${showHeader ? "show" : "hide"}`}>
      <div className="main-header-left-section">
        <div
          className="logo-container anim flex-row-all-center"
          style={{ ...animStyle, animationDelay: delays.left }}
        >
          <Logo />
        </div>

        <div className="nav-links-container">
          <div
            className="nav-link"
            style={{ ...animStyle, animationDelay: delays.item1 }}
          >
            <span>01.</span> 
            <a href="">About</a>
          </div>
          <div
            className="nav-link  anim"
            style={{ ...animStyle, animationDelay: delays.item2 }}
          >
            <span>02.</span> 
            <a href="">Experience</a>
          </div>
          <div
            className="nav-link anim"
            style={{ ...animStyle, animationDelay: delays.item3 }}
          >
            <span>03.</span> 
            <a href="">Work</a>
          </div>
          <div
            className="nav-link"
            style={{ ...animStyle, animationDelay: delays.item4 }}
          >
            <span>04.</span> 
            <a href="">Contact</a>
          </div>
        </div>
      </div>

      <div className="btn-container ">
        <button
          className="btnn anim"
          style={{ ...animStyle, animationDelay: delays.button }}
        >
          Resume
        </button>
      </div>
    </header>
  );
};

export default Header;
