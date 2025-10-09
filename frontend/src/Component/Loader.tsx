import React from "react";
 // Import the custom CSS animation

interface LoaderProps {
  fadeOut: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
<div className="loader-wrapper">
        <span className="loader-letter">T</span>
        <span className="loader-letter">H</span>
        <span className="loader-letter">Y</span>
        <span className="loader-letter">N</span>
        <span className="loader-letter">K</span>
        <span className="loader-letter">L</span>
        <span className="loader-letter">I</span>
        <span className="loader-letter">M</span>
        <span className="loader-letter">I</span>
        <span className="loader-letter">T</span>
        <span className="loader-letter">L</span>
        <span className="loader-letter">E</span>
        <span className="loader-letter">S</span>
        <span className="loader-letter">S</span>

        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
