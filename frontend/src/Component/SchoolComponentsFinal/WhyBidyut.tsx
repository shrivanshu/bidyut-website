"use client";
import React from "react";
import { AnimatedText, StaggeredText } from "../animations/TextAnimations";

const WhyBidyut: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-black relative font-['Roboto'] min-h-[300px] pb-10 mt-0 md:mt-4">
      {/* Heading */}
      <div
        className="absolute font-semibold leading-snug text-black dark:text-white hidden md:block"
        style={{
          fontSize: "62px",
          fontWeight: 600,
          top: "60px",
          left: "39px",
        }}
      >
        <AnimatedText
          direction="up"
          delay={0.2}
          duration={0.8}
        >
          <StaggeredText 
            text="Why Choose Bidyut" 
            className="block"
            staggerDelay={0.08}
            direction="up"
          />
        </AnimatedText>
        <AnimatedText
          direction="up"
          delay={0.6}
          duration={0.8}
        >
          <StaggeredText 
            text="Innovation?" 
            className="block"
            staggerDelay={0.08}
            direction="up"
          />
        </AnimatedText>
      </div>

      <div
        className="block md:hidden text-center text-black dark:text-white font-semibold leading-snug px-4 mt-6"
        style={{
          fontSize: "28px",
          fontWeight: 600,
        }}
      >
        <AnimatedText
          direction="fade"
          delay={0.3}
          duration={1}
        >
          <StaggeredText 
            text="Why Choose Bidyut Innovation?"
            staggerDelay={0.05}
            direction="up"
          />
        </AnimatedText>
      </div>

      {/* Subheading */}
      <div
        className="absolute text-black dark:text-white hidden md:block"
        style={{
          fontSize: "25px",
          fontWeight: 600,
          top: "60px", 
          left: "873px",
        }}
      >
        <AnimatedText
          direction="right"
          delay={0.8}
          duration={1}
        >
          <StaggeredText 
            text="Transform your classrooms into innovation"
            className="block"
            staggerDelay={0.03}
            direction="up"
          />
        </AnimatedText>
        <AnimatedText
          direction="right"
          delay={1.2}
          duration={1}
        >
          <StaggeredText 
            text="hubs with fully equipped labs, teacher training,"
            className="block"
            staggerDelay={0.03}
            direction="up"
          />
        </AnimatedText>
        <AnimatedText
          direction="right"
          delay={1.6}
          duration={1}
        >
          <StaggeredText 
            text="and NEP 2020–aligned curriculum."
            className="block"
            staggerDelay={0.03}
            direction="up"
          />
        </AnimatedText>
      </div>

      <div
        className="block md:hidden text-center text-black dark:text-white font-medium leading-relaxed px-6 mt-3"
        style={{
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        <AnimatedText
          direction="up"
          delay={0.6}
          duration={1.2}
        >
          <StaggeredText 
            text="Transform your classrooms into innovation hubs with fully equipped labs, teacher training, and NEP 2020–aligned curriculum."
            staggerDelay={0.02}
            direction="fade"
            splitBy="words"
          />
        </AnimatedText>
      </div>
    </section>
  );
};

export default WhyBidyut;
