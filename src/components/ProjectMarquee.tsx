
import { motion } from "framer-motion";

const ProjectMarquee = () => {
  const projects = [
    "Destiny", "EasyNotes", "WordSmith", "ChopChop", "BuildPublic", 
    "FitnessTracker", "FounderThreads", "GardenGram", "CodeAte", 
    "PERISKOPE", "HISSAB"
  ];

  // Duplicate the array to create seamless loop
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="w-full bg-black py-8 overflow-hidden border-t border-gray-800">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920], // Adjust based on content width
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project}-${index}`}
            className="inline-flex items-center px-8"
          >
            <span className="text-white font-bold text-xl hover:text-orange-400 transition-colors duration-300 cursor-pointer">
              {project}
            </span>
            {index < duplicatedProjects.length - 1 && (
              <span className="text-gray-600 mx-4">•</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectMarquee;
