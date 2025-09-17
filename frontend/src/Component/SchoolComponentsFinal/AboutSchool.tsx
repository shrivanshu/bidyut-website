export function AboutSchool() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/School/schooll.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6 text-balance">
          Empowering Schools to Build the Future
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
          We help students and teachers unlock creativity, innovation, and hands-on learning through robotics, AI, and
          STREAM education.
        </p>

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
