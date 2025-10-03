import { AnimatedText, StaggeredText } from "../animations/TextAnimations";

export function AboutSchool() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/school_images/Render.00_01_54_02.Still006.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl  px-6 text-center">
        <AnimatedText
          direction="up"
          delay={0.3}
          duration={1.2}
        >
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-heading font-bold text-white mb-6 text-balance">
            <StaggeredText 
              text="Empowering Schools to Build the Future"
              staggerDelay={0.08}
              direction="up"
              splitBy="words"
            />
          </h1>
        </AnimatedText>

        <AnimatedText
          direction="up"
          delay={0.8}
          duration={1.5}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-body mt-16 text-white/90 mb-8 max-w-4xl mx-auto text-pretty leading-relaxed">
            <StaggeredText 
              text="We help students and teachers unlock creativity, innovation, and hands-on learning through robotics, AI, and STREAM education."
              staggerDelay={0.03}
              direction="fade"
              splitBy="words"
            />
          </p>
        </AnimatedText>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          //Primary Button
          <button
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-semibold rounded-md transition"
          >
            Get Started Today
          </button>

          //Outline Button
          <button
            className="border border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-3 text-lg font-semibold rounded-md bg-transparent transition"
          >
            Learn More
          </button>
        </div> */}
      </div>
    </section>
  );
}
