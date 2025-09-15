"use client";
import React from "react";

const SchoolHeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white relative font-['Poppins'] min-h-screen">
      {/* Left Text Section */}
      <div
        className="absolute"
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

      {/* Image 1 */}
      <div className="absolute left-[696px] top-[318px] w-[166px] h-[247px] rounded-[30px] overflow-hidden">
        <img
          src="/publicFinal/SchoolImages/School1.svg"
          alt="School1"
          width={166}
          height={247}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 2 */}
      <div className="absolute left-[877px] top-[289px] w-[205px] h-[305px] rounded-[30px] overflow-hidden">
        <img
          src="/publicFinal/SchoolImages/School2.svg"
          alt="School2"
          width={205}
          height={305}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 3 */}
      <div className="absolute left-[1090px] top-[275px] w-[231px] h-[348px] rounded-[30px] overflow-hidden">
        <img
          src="/publicFinal/SchoolImages/School3.svg"
          alt="School3"
          width={231}
          height={348}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image 4 */}
      <div className="absolute left-[1332px] top-[252px] w-[257px] h-[393px] rounded-[30px] overflow-hidden">
        <img
          src="/publicFinal/SchoolImages/School3.svg"
          alt="School4"
          width={257}
          height={393}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default SchoolHeroSection;
