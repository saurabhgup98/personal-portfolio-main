import React from 'react';
import './Logo.css';

const Logo: React.FC = () => {
  return (
    <div className="logo-wrapper">
      <svg className="hexagon-logo" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
        {/* Main hexagon */}
        <polygon
          className="hexagon-outline"
          points="100,20 173.2,60 173.2,140 100,180 26.8,140 26.8,60"
        />

        {/* Middle-right edge */}
        <line
          className="highlight-line"
          x1="173.2" y1="60"
          x2="173.2" y2="140"
        />

        {/* Bottom-right edge */}
        <line
          className="highlight-line"
          x1="173.2" y1="140"
          x2="100" y2="180"
        />

        {/* Center text */}
        <text x="100" y="125" className="logo-text">S</text>
      </svg>
    </div>
  );
};

export default Logo;
