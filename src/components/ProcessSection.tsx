import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Zap } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Discovery & Planning",
      duration: "Week 1",
      description: "We dive deep into your vision, validate the problem, and create a focused roadmap for your MVP.",
      details: [
        "Problem validation & user research",
        "Feature prioritization matrix",
        "Technical architecture planning",
        "Timeline & milestone setting"
      ]
    },
    {
      icon: Zap,
      title: "Design & Development",
      duration: "Week 2-3",
      description: "Rapid prototyping and development using modern tech stack for fast iteration and deployment.",
      details: [
        "UI/UX design & prototyping",
        "Core feature development",
        "Database & API integration",
        "Real-time testing & iteration"
      ]
    },
    {
      icon: CheckCircle,
      title: "Launch & Optimize",
      duration: "Week 4",
      description: "Deploy your MVP, gather user feedback, and optimize for traction and growth.",
      details: [
        "Production deployment",
        "User onboarding flows",
        "Analytics & tracking setup",
        "Feedback collection system"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black/50" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <Clock className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">3-4 Week Delivery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            How We Build MVPs
            <span className="block text-orange-400 font-normal">That Get Traction</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures your MVP is built fast, launched quickly, and optimized for real user feedback and growth.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-black font-bold text-sm">
                {index + 1}
              </div>
              
              {/* Step Card */}
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-orange-500/30 transition-all duration-300 group">
                {/* Icon */}
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-orange-400" />
                </div>
                
                {/* Duration Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full mb-4">
                  <span className="text-gray-300 text-sm font-medium">{step.duration}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                
                {/* Details List */}
                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Build Your MVP?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join dozens of founders who've launched their MVPs with us and went on to raise funding, acquire users, and build successful companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-orange-500/25">
                Start Your Project
              </button>
              <button className="border border-gray-600 hover:border-orange-500 text-white font-medium px-8 py-3 rounded-full transition-all duration-200">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection; 