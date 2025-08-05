import React from "react";

const gallery_hero: React.FC = () => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <source src="/robott.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          color: "white",
          padding: "0 20px",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #00D084, #00E6A8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.25rem",
          }}
        >
          Inspiring
        </h1>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            marginBottom: "1.5rem",
          }}
        >
          Innovation Through Tech
        </h2>

        {/* Paragraph */}
        <p
          style={{
            maxWidth: "850px",
            fontSize: "1.05rem",
            fontWeight: 400,
            lineHeight: 1.6,
            marginBottom: "3rem",
          }}
        >
          For over 12 years, <strong>Bidyut Innovation</strong> has been
          revolutionizing robotics education across India. We’ve empowered{" "}
          <strong>45,000+ students</strong> and transformed{" "}
          <strong>30+ schools</strong> with cutting-edge technology and
          hands-on learning experiences.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "2rem", // Increased spacing between buttons
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#00D084",
              color: "white",
              padding: "0.9rem 2rem",
              borderRadius: "6px",
              border: "none",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#00b874")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#00D084")
            }
          >
            Explore Program
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#00D084",
              padding: "0.9rem 2rem",
              borderRadius: "6px",
              border: "2px solid #00D084",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#00D084";
              (e.target as HTMLButtonElement).style.color = "white";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.target as HTMLButtonElement).style.color = "#00D084";
            }}
          >
            Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default gallery_hero;
