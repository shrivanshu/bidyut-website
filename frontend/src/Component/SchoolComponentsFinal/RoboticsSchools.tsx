export function RoboticsSchools() {
  return (
    <section className="py-16 px-4 dark:bg-black bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-heading font-bold dark:text-gray-300 text-gray-900 mb-2">
            See How Schools Are
          </h2>
          <p className="text-lg md:text-xl font-roboto dark:text-gray-400 text-gray-600">
            Transforming with Robotics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left side - Main image and content */}
          <div className="space-y-6 flex flex-col">
            <div className="rounded-2xl overflow-hidden flex-grow">
              <img
                src="/school_images/WhatsApp Image 2025-09-22 at 7.45.54 PM.jpeg"
                alt="Modern robotics lab with red and purple LED lighting"
                className="w-full h-full min-h-[600px] object-cover"
              />
            </div>

          
          </div>

          {/* Right side - Content blocks */}
          <div className="space-y-8">
            <div className="space-y-4 pb-8 border-b border-gray-200">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                See How Schools Are Transforming with Robotics
              </p>
              <h3 className="text-xl md:text-2xl font-subheading dark:text-gray-300 font-bold text-gray-900">
                Modern robotics labs, equipped with smart tools and vibrant learning spaces
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Modern robotics labs, equipped with smart tools and vibrant learning spaces, are helping students turn curiosity into innovation. Join the growing movement of schools embracing future-ready education.
              </p>
            </div>

            <div className="space-y-4 pb-8 border-b border-gray-200">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Empower Teachers, Inspire Students
              </p>
              <h3 className="text-xl md:text-2xl font-subheading dark:text-gray-300 font-bold text-gray-900">
                Expert-led training for confident robotics and AI education
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                With our expert-led training, teachers gain the confidence to deliver robotics and AI education effectively. Supported with lesson plans, hands-on practice, and continuous guidance, they create engaging classrooms that spark creativity.
              </p>
            </div>

            <div className="space-y-4 pb-8 border-b border-gray-200 last:border-b-0">
              <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Building Future-Ready Skills
              </p>
              <h3 className="text-xl md:text-2xl font-subheading dark:text-gray-300 font-bold text-gray-900">
                From robotics and AI to drones and global competitions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                From robotics and AI to drones and global competitions, we prepare students with real-world problem-solving skills. Over 50+ schools have already experienced the transformation—let's make your school the next hub of innovation.
              </p>
            </div>

            <div className="pt-4">
              <a href="/gallery">
              <button
                className="
                   w-[350px] h-[40px] md:w-[591px]  md:h-[61px]
                  
                  border border-gray-300
                  text-gray-700
                  dark:text-gray-300
                  hover:bg-gray-50
                  bg-transparent
                  rounded-md
                  font-medium
                  transition
                "
              >
                View More
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
