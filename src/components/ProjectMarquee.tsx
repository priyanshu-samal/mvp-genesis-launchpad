
import { motion } from "framer-motion";

const ProjectMarquee = () => {
  const projects = [
    "Destiny", "EasyNotes", "WordSmith", "ChopChop", "BuildPublic", 
    "FitnessTracker", "FounderThreads", "GardenGram", "CodeAte", 
    "PERISKOPE", "HISSAB"
  ];

  return (
    <div className="w-full bg-black py-8 overflow-hidden border-t border-gray-800">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -100 * projects.length], // Move exactly one set width
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          style={{ minWidth: "200%" }} // Ensure enough width for seamless loop
        >
          {/* First set */}
          {projects.map((project, index) => (
            <div
              key={`first-${project}-${index}`}
              className="inline-flex items-center px-8"
            >
              <span className="text-white font-bold text-xl hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                {project}
              </span>
              <span className="text-gray-600 mx-4">•</span>
            </div>
          ))}
          {/* Second set for seamless loop */}
          {projects.map((project, index) => (
            <div
              key={`second-${project}-${index}`}
              className="inline-flex items-center px-8"
            >
              <span className="text-white font-bold text-xl hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                {project}
              </span>
              <span className="text-gray-600 mx-4">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectMarquee;
