import React, { useEffect, useState, type ReactNode } from 'react';
import './css/HexagonLoader.css';

interface HexagonLoaderProps {
  children: ReactNode;
}

const HexagonLoader: React.FC<HexagonLoaderProps> = ({ children }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1000); // Show "S" after hexagon finishes drawing

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000); // Start fading after some delay

    const completeTimer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000); // Fully remove loader

    return () => {
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (loadingComplete) {
    return <>{children}</>;
  }

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <svg viewBox="0 0 200 200" className="hexagon-svg">
        <polygon
          points="100,10 173,55 173,145 100,190 27,145 27,55"
          className="hexagon-shape"
        />
        {showText && (
          <text
            x="100"
            y="125"            
            className="fade-in-text">
            S
          </text>
        )}
      </svg>
    </div>
  );
};

export default HexagonLoader;
