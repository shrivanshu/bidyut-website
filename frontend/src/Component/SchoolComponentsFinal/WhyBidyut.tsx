"use client";
import React from "react";

const WhyBidyut: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-black relative font-['Roboto'] min-h-[300px] pb-10 mt-0 md:mt-4">
      {/* Heading */}
      <h2
        className="absolute font-semibold leading-snug text-black dark:text-white hidden md:block"
        style={{
          fontSize: "62px",
          fontWeight: 600,
          top: "60px",
          left: "39px",
        }}
      >
        Why Choose Bidyut <br /> Innovation?
      </h2>

      <h2
        className="block md:hidden text-center text-black dark:text-white font-semibold leading-snug px-4 mt-6"
        style={{
          fontSize: "28px",
          fontWeight: 600,
        }}
      >
        Why Choose Bidyut Innovation?
      </h2>

      {/* Subheading */}
      <p
        className="absolute text-black dark:text-white hidden md:block"
        style={{
          fontSize: "25px",
          fontWeight: 600,
          top: "60px", 
          left: "873px",
        }}
      >
        Transform your classrooms into innovation <br />
        hubs with fully equipped labs, teacher training, <br />
        and NEP 2020–aligned curriculum.
      </p>

      <p
        className="block md:hidden text-center text-black dark:text-white font-medium leading-relaxed px-6 mt-3"
        style={{
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        Transform your classrooms into innovation hubs with fully equipped labs,
        teacher training, and NEP 2020–aligned curriculum.
      </p>
    </section>
  );
};

export default WhyBidyut;
