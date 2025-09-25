

export function EducationSections() {
  return (
    <section className="bg-amber-50 dark:bg-black mb-10 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Innovation Hubs Section */}
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="relative">
            <img
              src="/school_images/C2271.00_00_25_11.Still004.jpg"
              alt="Students working with robotics and STEM materials in classroom"
              className="rounded-lg shadow-lg object-cover w-[555px] h-[355px]"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-gray-300 text-gray-900 leading-tight">
              Turn Classrooms into Innovation Hubs
            </h2>
            <p className="text-gray-700 dark:text-gray-500 text-lg leading-relaxed">
         Our AI & Robotics Lab solutions are designed to inspire creativity and innovation. Each lab is equipped with hands-on kits, sensors, and tools that bring learning to life. We provide a structured, grade-wise curriculum aligned with school textbooks and NEP 2020, ensuring seamless integration into academics without adding extra burden.
            </p>
            {/* <button className="flex items-center gap-2 text-black dark:text-gray-300 hover:text-blue-800 font-semibold transition-colors group">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Explore Lab Setup
            </button> */}
          </div>
        </div>

        {/* Teacher Training Section */}
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="relative">
            <img
              src="/school_images/IMG_9899.JPG"
              alt="Teacher with educational robotics device"
              className="rounded-lg shadow-lg object-cover w-[555px] h-[355px]"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-gray-400 text-gray-900 leading-tight">
              Empowering Teachers with Confidence
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed dark:text-gray-500">
              Our comprehensive Teacher Training Program equips science and computer teachers to confidently deliver robotics and AI education. Through expert-led workshops, hands-on practice, structured lesson planning, and ongoing support, we ensure teachers are fully prepared to conduct engaging, effective, and future-ready classroom sessions.
            </p>
            {/* <button className="flex items-center gap-2 text-black dark:text-gray-300 hover:text-blue-800 font-semibold transition-colors group">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              Learn About Teacher Training
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
