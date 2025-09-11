import { motion } from "framer-motion";

const RoboticLabsForSchools = () => (
  <div className="App bg-white dark:bg-black transition-colors duration-300 min-h-screen">
    <div className="w-full flex flex-col md:flex-row items-center justify-center px-4 py-12 gap-8 max-w-7xl mx-auto">
      
      {/* Image with animation */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/School/school.png"
          alt="Robotics Lab"
          className="rounded-3xl object-cover w-[500px] h-[500px] shadow-lg"
        />
      </motion.div>

      {/* Text section with animation */}
      <motion.div
        className="md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
          Robotic Labs<br />for Schools
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">
          The inclusion of robotics studies in the school curriculum is no longer a matter of debate. Students need exposure from an early age to be able to feel comfortable working around machines as the world is inevitably moving towards that future. However, robotics labs in schools are more than just a necessity. In fact, many teachers around the globe believe that they complement the present curriculum, help enhance STEAM education and lead to other such benefits that aid students to effectively take their education forward.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Governments across the globe have already recognised the importance of Robotics in the classroom and have begun to create programmes and laws that would incorporate them into the public education system. The idea behind such actions is not only teaching students the basics of Robotics but also opening a whole new world for them with exciting opportunities that they would not have access to otherwise.
        </p>
      </motion.div>
    </div>
  </div>
);

export default RoboticLabsForSchools;
