import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "Destiny",
    description: "AI for life purpose & reflection",
    tech: ["Next.js", "Gemini"],
    image: "public/home.png",
  },
  {
    name: "WordSmith",
    description: "Auto-generate threads, posts & blogs",
    tech: ["Next.js", "Tailwind", "Gemini", "PostgreSQL"],
    image: null,
  },
  {
    name: "Periskope",
    description: "Real-time product analytics MVP",
    tech: ["React", "Supabase", "ShadCN"],
    image: null,
  },
  {
    name: "EasyNotes",
    description: "Convert cluttered PDFs to clean B/W printable format",
    tech: ["Next.js", "PDF.js"],
    image: null,
  },
  {
    name: "Bloom",
    description: "Plant tracking app with modern UI",
    tech: ["Next.js", "Prisma"],
    image: null,
  },
  {
    name: "CredBoost",
    description: "Credibility insights tool for founders",
    tech: ["React", "TypeScript", "PostgreSQL"],
    image: null,
  },
];

const CARD_WIDTH = 900; // px (reduced from 1200)
const CARD_MARGIN = 48; // px (keep as is)
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_MARGIN * 2;

const ProjectsShowcaseSection = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  // Marquee animation
  // We duplicate the cards for seamless looping
  const marqueeProjects = [...projects, ...projects];

  // Pause on hover logic
  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => {
    const currentX = x.get();
    const endX = -TOTAL_CARD_WIDTH * projects.length;
    // Calculate remaining distance and adjust duration proportionally
    const totalDistance = Math.abs(endX);
    const remainingDistance = Math.abs(endX - currentX);
    const baseDuration = 40; // seconds for full loop
    const duration = (remainingDistance / totalDistance) * baseDuration;
    controls.start({
      x: [currentX, endX],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
          ease: "linear",
        },
      },
    });
  };

  // Start animation on mount
  useEffect(() => {
    handleMouseLeave();
    // eslint-disable-next-line
  }, []);

  return (
    <section id="work" className=" py-10 relative bg-gradient-to-br from-black via-neutral-900/80 to-black px-0 md:px-0 lg:px-0 py-16 flex flex-col justify-center overflow-hidden mb-32">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 text-left px-6 md:px-12 lg:px-24"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Projects</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-1 font-light">MVPs Built for Founders Who Ship</p>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
            <span className="text-orange-400 text-lg">🛡️</span>
            Due to strict NDAs with most of our clients, we can't always showcase full apps or source code. But here are a few glimpses of what we've helped founders bring to life.
          </div>
        </motion.div>

        {/* Marquee Row */}
        <div className="flex-1 px-10 flex items-center justify-center w-full">
          <motion.div
            ref={marqueeRef}
            className="flex items-stretch select-none cursor-grab w-full"
            style={{ x }}
            animate={controls}
            drag="x"
            dragConstraints={{ left: -TOTAL_CARD_WIDTH * projects.length, right: 0 }}
            dragElastic={0.1}
          >
            {marqueeProjects.map((project, idx) => (
              <div
                key={project.name + idx}
                className="min-w-[500px] sm:min-w-[700px] md:min-w-[900px] h-[520px] bg-white/5 backdrop-blur-md border border-neutral-800 rounded-2xl shadow-xl shadow-neutral-900/40 mx-6 flex flex-col overflow-hidden"
              >
                {/* Image area with overlay heading */}
                <div className="relative h-[420px] w-full bg-neutral-800 flex items-center justify-center rounded-t-2xl overflow-hidden">
                  {/* Project name overlay */}
                  <div className="absolute top-0 left-0 w-full flex justify-center items-center pt-6 z-10">
                    <h3 className="text-2xl font-bold text-white bg-black/40 px-6 py-2 rounded-full shadow-md text-center">
                      {project.name}
                    </h3>
                  </div>
                  {/* Centered image or placeholder */}
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.name + ' screenshot'} 
                      className="absolute inset-0 w-full h-full object-cover rounded-t-2xl border-2 border-neutral-900 shadow-lg" 
                      style={{ backgroundColor: '#222' }}
                    />
                  ) : (
                    <span className="text-gray-500 text-2xl font-semibold w-full text-center flex items-center justify-center h-full">
                      Project Image Here
                    </span>
                  )}
                </div>
                {/* Description and tech stack */}
                <div className="flex-1 flex flex-col px-6 py-4 justify-start">
                  <p className="text-base text-neutral-300 mb-2 text-center line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-neutral-800 text-white rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcaseSection; 