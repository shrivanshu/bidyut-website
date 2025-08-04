import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section 
      style={{ 
        position: "relative", 
        width: "100%", 
        height: "100vh", 
        fontFamily: "'Poppins', sans-serif", 
        overflow: "hidden" 
      }}
    >
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      {/* Background Video */}
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -2,
        }}
        src="/Robo Dance.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#ffffff",
          opacity: 0.5,
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: "900px",
          padding: "80px 0px 80px 80px",
          color: "#000000",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            background: "white",
            color: "#0acf83",
            fontWeight: 600,
            fontSize: "16px",
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: "6px",
            marginBottom: "20px",
            width: "fit-content",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          Learn Robotics. Build the Future.
        </div>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: 600,
            lineHeight: 1.2,
            margin: "0 0 20px 0",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span style={{ color: "#0acf83" }}>Think Limitless</span> Learn <br />
          <span style={{ color: "#000000" }}>Beyond Boundaries</span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.7)",
            maxWidth: "640px",
            lineHeight: 1.8,
            textAlign: "justify",
            letterSpacing: "0.4px",
            fontFamily: "'Georgia', 'Times New Roman', serif",
          }}
        >
          At Bidyut, we go beyond textbooks — offering practical robotics
          learning powered by AI, coding, and STEAM. Discover a new way to
          build, program, and solve real-world challenges with creativity.
        </p>
      </div>

      {/* Navigation Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "#0acf83",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "#d1d5db",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            backgroundColor: "#d1d5db",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Mobile Responsive Styles */}

<style>
  {`
    @media (max-width: 768px) {
section {
  height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Changed from center */
  padding: 50px 15px 5px 10px; /* Top increased to 50px, bottom reduced to 5px */
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  align-items: flex-start;
  padding-top: 60px; /* Additional top padding if needed */
}

      div[style*="maxWidth: 900px"] {
  padding: 0 10px !important;
  text-align: left !important;
  max-width: 100% !important;
  align-items: flex-start !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  height: auto !important;
  margin: 0 !important;
  width: 100% !important;
}

h1 {
  font-size: 8vw !important;
  line-height: 1.2 !important;
  text-align: center !important;
  width: 100% !important;
  margin: 30px 0 25px -40px !important; /* Added 30px top margin, reduced bottom to 25px */
  padding-top: 15px !important; /* Additional top padding */
}

h1 span {
  display: block !important;
  margin-top: 10px !important; /* Space between spans if needed */
}

h1 br {
  display: none !important;
}
p {
  font-size: 3.5vw !important;
  text-align: left !important;
  padding: 0 !important;
  margin: 0 0 20px 0 !important;
  max-width: 100% !important;
  line-height: 1.6 !important;
  text-align-last: left !important;
  margin-left: -25px !important;
}
  
div[style*="width: fit-content"] {
  margin: 50px 0 20px 0 !important;  /* Top margin increased to 50px */
  font-size: 3.8vw !important;
  padding: 10px 14px !important;
  text-align: center !important;
  position: relative;
  top: 15px;  /* Additional downward nudge */
  transform: translateY(10px);  /* Extra precision if needed */
}
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 28px !important;
      }

      p {
        font-size: 14px !important;
      }

div[style*="width: fit-content"] {
  margin: 0 0 20px 0 !important;
  font-size: 3.8vw !important;
  padding: 6px 6px !important;
  text-align: center !important;
  margin-left: -20px !important;
}
    }
  `}
</style>

    </section>
  );
};

export default HeroSection;