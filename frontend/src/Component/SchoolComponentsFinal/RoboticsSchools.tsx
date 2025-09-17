export function RoboticsSchools() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold font-roboto text-gray-900 mb-2">
            See How Schools Are
          </h2>
          <p className="text-lg md:text-xl font-roboto text-gray-600">
            Transforming with Robotics
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main image and content */}
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="/School/RoboticsSchools.png"
                alt="Modern robotics lab with red and purple LED lighting"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Bring Innovation to Your School Today
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Partner with us to set up your Robotics & AI Lab, train your teache...
              </h3>
              <p className="text-gray-600">
                We've already transformed 50+ schools with hands-on robotics programs.
                Let's make your school next.
              </p>
            </div>
          </div>

          {/* Right side - Repeated content blocks */}
          <div className="space-y-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="space-y-4 pb-8 border-b border-gray-200 last:border-b-0"
              >
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                  Bring Innovation to Your School Today
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Partner with us to set up your Robotics & AI Lab, train your teache...
                </h3>
                <p className="text-gray-600">
                  We've already transformed 50+ schools with hands-on robotics programs.
                  Let's make your school next.
                </p>
              </div>
            ))}

            <div className="pt-4">
              <button
                className="
                  w-full md:w-auto
                  px-6 py-3
                  border border-gray-300
                  text-gray-700
                  hover:bg-gray-50
                  bg-transparent
                  rounded-md
                  font-medium
                  transition
                "
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
