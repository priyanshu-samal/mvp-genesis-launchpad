import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Load UnicornStudio script
    if (!window.UnicornStudio) {
      window.UnicornStudio = { 
        isInitialized: false,
        init: () => {} // Provide empty function initially
      };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
          
          // Additional cleanup after UnicornStudio loads
          setTimeout(() => {
            const projectContainer = document.querySelector('[data-us-project]');
            if (projectContainer) {
              // Remove any elements that might be watermarks
              const watermarkElements = projectContainer.querySelectorAll(
                'a[href*="unicorn"], a[href*="UnicornStudio"], div[style*="position:absolute"], div[style*="position:fixed"], *[class*="watermark"], *[id*="watermark"]'
              );
              watermarkElements.forEach(el => el.remove());
            }
          }, 1000);
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
      {/* UnicornStudio Background Animation */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        data-us-project="YQbc6EHLq0fPJmaGmk6b"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Content overlay */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
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
          className="mb-16"
        >
          <a
            href="https://cal.com/priyanshu-samal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="text-lg px-8 py-3">
              Build With Us
            </Button>
          </a>
        </motion.div>
      </div>
      
      {/* Comprehensive UnicornStudio watermark removal */}
      <style>
        {`
          /* Hide all possible watermark elements */
          div[data-us-project] div:last-child,
          div[data-us-project] div:first-child,
          div[data-us-project] a,
          div[data-us-project] a[href*="unicorn"],
          div[data-us-project] a[href*="studio"],
          div[data-us-project] a[href*="UnicornStudio"],
          div[data-us-project] *[style*="position: absolute"],
          div[data-us-project] *[style*="position: fixed"],
          div[data-us-project] *[style*="bottom"],
          div[data-us-project] *[style*="top"],
          div[data-us-project] *[class*="watermark"],
          div[data-us-project] *[id*="watermark"],
          div[data-us-project] *[class*="credit"],
          div[data-us-project] *[id*="credit"],
          div[data-us-project] span,
          div[data-us-project] p,
          canvas + div,
          canvas + a,
          canvas ~ div:last-child,
          canvas ~ a:last-child {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            left: -9999px !important;
            top: -9999px !important;
          }

          /* Ensure canvas is visible but hide everything else */
          div[data-us-project] canvas {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
          }

          /* Additional cleanup for any remaining elements */
          div[data-us-project] > div:not(:has(canvas)) {
            display: none !important;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
