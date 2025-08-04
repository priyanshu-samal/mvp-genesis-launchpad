import { motion } from "framer-motion";
import { Flame, Brain, Cog, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Flame className="w-6 h-6 text-orange-400" />,
    title: "MVPs That Launch",
    description: "Lean, fast builds that go live, not just sit in dev."
  },
  {
    icon: <Brain className="w-6 h-6 text-orange-400" />,
    title: "Validation-First Approach",
    description: "We test real demand before we touch code."
  },
  {
    icon: <Cog className="w-6 h-6 text-orange-400" />,
    title: "Modern Stack",
    description: "Next.js, Tailwind, ShadCN, Supabase, Postgres. Built to scale."
  },
  {
    icon: <FileText className="w-6 h-6 text-orange-400" />,
    title: "Clean Docs & Handoff",
    description: "We ship with clarity: API docs, guides, and architecture."
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-24 bg-black overflow-hidden">
      {/* Glowing background overlay for fire effect */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: "radial-gradient(ellipse at 60% 40%, rgba(255,140,0,0.12) 0%, transparent 70%)"}} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Founders Trust Us</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">We don't just build fast, we build right.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Quote Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="mb-8 md:mb-0 max-w-xl mx-auto md:mx-0">
              <blockquote className="text-white text-2xl md:text-3xl font-semibold leading-snug mb-6">
                "Founders waste months and thousands just figuring out v1. We help you launch in weeks: lean, tested, and ready for users."
              </blockquote>
              <div className="text-white text-base font-medium mb-8">
                ~ Priyanshu Samal<br />
                <span className="text-gray-400 font-normal">Founder, BuildMVPFast</span>
              </div>
              <a
                href="https://cal.com/priyanshu-samal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-black hover:bg-gray-100 font-semibold rounded-full px-8 py-3 shadow-lg transition-all duration-200">
                  Book a Call
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                whileHover={{ boxShadow: "0 0 24px 4px #ff9100aa" }}
                className="bg-black/60 rounded-2xl p-6 flex flex-col items-start gap-3 border border-gray-800 hover:border-orange-500 transition-all duration-200 shadow-lg"
              >
                <div className="mb-2">{feature.icon}</div>
                <h4 className="text-white text-lg font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-300 text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection; 