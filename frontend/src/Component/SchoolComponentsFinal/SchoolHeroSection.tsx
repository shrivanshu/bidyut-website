"use client";
import React from "react";
import SchoolCards from "../../Animations/SchoolCards";

const SchoolHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white relative font-['Poppins'] min-h-screen">
      {/* Left Text Section */}
      <div
        className="absolute hidden md:block"
        style={{ width: "543px", top: "284px", left: "69px" }}
      >
        <h1
          className="font-bold leading-tight"
          style={{ fontSize: "50px", fontWeight: 700 }}
        >
          Transform Your Classroom with <br />
          Robotics, AI & <br />
          Future-Ready Labs
        </h1>
        <p
          className="mt-6 text-gray-800"
          style={{ fontSize: "20px", fontWeight: 500 }}
        >
          We provide hands-on robotics, AI, drone programs, teacher training,
          and global competitions to prepare students for tomorrow.
        </p>
      </div>

      {/* Mobile Heading & Subheading */}
      <div className="block md:hidden text-center px-4 pt-16">
        <h1
          className="font-bold leading-snug text-[28px] sm:text-[32px]"
          style={{ fontWeight: 700 }}
        >
          Transform Your Classroom with <br />
          Robotics, AI & <br />
          Future-Ready Labs
        </h1>
        <p className="mt-4 text-gray-800 text-[16px] sm:text-[18px] font-medium">
          We provide hands-on robotics, AI, drone programs, teacher training,
          and global competitions to prepare students for tomorrow.
        </p>
      </div>

      {/* Imported Cards */}
      <SchoolCards />
    </section>
  );
};

export default SchoolHeroSection;
