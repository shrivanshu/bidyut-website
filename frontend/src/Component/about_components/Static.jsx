import React from "react";

const Static = () => {
  return (
    <div>
      <div className="pt-32 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex flex-col mt-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug sm:leading-relaxed md:leading-snug text-gray-800 dark:text-white mb-6">
                Bidyut Focuses on{" "}
                <span className="text-emerald-400">Educating Students </span>
                <br className="hidden sm:block" />
                to act with Integrity in an increasingly
                <br className="hidden sm:block " />
                <span className="text-emerald-400"> digital world</span>
              </h1>
            </div>
            <p className="text-[#0A254070] dark:text-gray-300 text-base sm:text-lg max-w-6xl mx-auto leading-relaxed">
              Bidyut's trajectory is to bring the future of education to your
              doorsteps. We are on a mission to uplift the education system of
              India by developing the world's most advanced Coding and Robotics
              education for the children of our country.
            </p>
          </div>

          {/* Mission and Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Our Mission */}
            <div className="space-y-8 flex flex-col items-center md:items-start">
              <div className="relative w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[520px]">
                <img
                  src="https://i.ibb.co/Xf74d2Xs/0ae07f15c7144df71a52f94be159ea2311903644.png"
                  alt="Our Mission"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-center pt-4 md:pt-32 pb-12 sm:pb-20 md:pb-36">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-400 dark:text-gray-300 text-base sm:text-xl md:text-2xl font-semibold leading-relaxed">
                  To create the most compelling education company of the 21st
                  century by driving students towards conceptual, technological
                  & fun-based learning.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="space-y-8 flex flex-col items-center md:items-start">
              <div className="text-center md:text-center order-2 md:order-1 pt-8 md:pt-44 pb-12 sm:pb-20 md:pb-36">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-400 mb-4 sm:mb-3">
                  Our Vision
                </h2>
                <p className="text-gray-400 dark:text-gray-300 text-base sm:text-xl md:text-2xl font-semibold leading-relaxed">
                  To prepare every child for a technological and challenging
                  world ahead by fostering innovation through personalized
                  learning experiences.
                </p>
              </div>
              <div className="relative w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[520px] order-1 md:order-2">
                <img
                  src="https://i.ibb.co/5gf6JysH/f1c278f39c1e7100fd51971710b47389cf7bae76.png"
                  alt="Our Vision"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Static;