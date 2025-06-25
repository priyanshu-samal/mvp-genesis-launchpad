
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-white font-light">
            <div className="text-6xl md:text-7xl xl:text-[5.25rem] leading-tight">
              We Build MVPs
            </div>
            <div className="text-6xl md:text-7xl xl:text-[5.25rem] italic leading-tight">
              For Ambitious Founders
            </div>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-md text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          From rough ideas to launch-ready products — we design, develop, and deliver fast, clean MVPs that get traction, feedback, and early users.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="text-lg px-8 py-3">
            Build With Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
