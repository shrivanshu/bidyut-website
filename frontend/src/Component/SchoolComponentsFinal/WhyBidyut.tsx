"use client";
import React from "react";

const WhyBidyut: React.FC = () => {
  return (
    <section className="w-full bg-white relative font-['Roboto'] min-h-[400px]">
      {/* Heading */}
      <h2
        className="absolute font-semibold leading-snug text-black"
        style={{
          fontSize: "62px",
          fontWeight: 600,
          top: "120px",
          left: "39px",
        }}
      >
        Why Choose Bidyut <br /> Innovation?
      </h2>

      {/* Subheading */}
      <p
        className="absolute text-black"
        style={{
          fontSize: "25px",
          fontWeight: 600,
          top: "120px",
          left: "873px",
        }}
      >
        Transform your classrooms into innovation <br />
        hubs with fully equipped labs, teacher training, <br />
        and NEP 2020–aligned curriculum.
      </p>
    </section>
  );
};

export default WhyBidyut;
