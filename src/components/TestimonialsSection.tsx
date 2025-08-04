import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    project: "Destiny",
    quote:
      "I gave them a rough idea and a tight deadline. What I got back looked like something a full team would take 2 months to build. Smooth process, solid communication, and zero hand-holding needed.",
    author: "— Destiny Team",
  },
  {
    project: "EasyNotes",
    quote:
      "I needed something simple and reliable for students. What they built was way more polished than I expected for an MVP. It worked out of the box, and students actually started using it from day one.",
    author: "— Founder, EasyNotes",
  },
  {
    project: "ORBAFLOW",
    quote:
      "Honestly didn't think we'd get a working product in 3 weeks. But they pulled it off. Frontend, backend, everything. Super responsive team, and they actually cared about the details.",
    author: "— Co-Founder, ORBAFLOW",
  },
  {
    project: "WordSmith",
    quote:
      "We were just testing the idea of AI-generated content — didn't expect people to actually start using it the same week. The UI was slick, performance was on point, and it handled scale without any tweaks. Solid execution.",
    author: "— Founder, WordSmith",
  },
  {
    project: "Periskope",
    quote:
      "The dashboard, the filters, the real-time tracking — everything just clicked. They didn't just build what we asked for, they improved it. We shipped faster than we ever have, and even our internal team was impressed.",
    author: "— Product Lead, Periskope",
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setActive((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section
      id="testimonials"
      className="w-full py-24 px-4 md:px-0"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #2a1800cc 0%, #000 70%)' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wider italic drop-shadow-lg">Trusted by Founders & Teams</h2>
          <p className="text-xl text-orange-100 mb-14 font-medium tracking-wide">Hear from clients and collaborators about their experience working with us.</p>
        </motion.div>
        <div className="relative flex flex-col items-center justify-center">
          {/* Carousel arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition z-10"
          >
            <span className="text-2xl">&#8592;</span>
          </button>
          <div className="w-full">
            <div className="flex flex-col items-center min-h-[260px] p-4">
              <blockquote className="text-2xl text-white font-semibold mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">“{testimonials[active].quote}”</blockquote>
              <div className="text-lg text-orange-200 font-semibold mb-3 font-mono">{testimonials[active].author.replace(/^—\s*/, "")}</div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-xl font-bold text-white tracking-wide uppercase">{testimonials[active].project}</span>
              </div>
            </div>
          </div>
          <button
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition z-10"
          >
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>
        {/* Dot indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 border-2 ${active === i ? 'bg-orange-400 border-orange-400 scale-125' : 'bg-neutral-700 border-neutral-700'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 