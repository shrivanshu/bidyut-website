import React from "react";

interface LoaderProps {
  fadeOut: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fadeOut }) => {
  return (
    <div
      className={`fixed inset-0 z-[99999] h-screen flex items-center justify-center bg-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        src="/loader.mov"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Loader;
