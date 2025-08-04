import { motion } from "framer-motion";
import { ExternalLink, Users, TrendingUp, DollarSign, Calendar, ArrowRight } from "lucide-react";

const PortfolioSection = () => {
  const caseStudies = [
    {
      title: "Destiny",
      category: "SaaS Platform",
      description: "AI-powered project management tool for remote teams",
      challenge: "Founder needed to validate demand for AI-driven project management in a crowded market",
      solution: "Built a focused MVP with core AI features, user onboarding, and analytics",
      results: [
        { metric: "500+", label: "Active Users" },
        { metric: "$50K", label: "Monthly Revenue" },
        { metric: "3 weeks", label: "Time to Launch" }
      ],
      testimonial: {
        text: "BuildMVPFast delivered exactly what we needed to validate our idea. The MVP helped us secure our first 500 users and $50K in revenue within 3 months.",
        author: "Sarah Chen",
        role: "Founder & CEO",
        company: "Destiny"
      },
      tech: ["React", "Node.js", "OpenAI API", "Stripe"],
      image: "/placeholder.svg"
    },
    {
      title: "EasyNotes",
      category: "Mobile App",
      description: "Note-taking app with AI-powered organization",
      challenge: "Validate if users would pay for AI-powered note organization in a competitive space",
      solution: "Cross-platform mobile app with core AI features and subscription model",
      results: [
        { metric: "2K+", label: "Downloads" },
        { metric: "$15K", label: "Monthly Revenue" },
        { metric: "4 weeks", label: "Development Time" }
      ],
      testimonial: {
        text: "The team at BuildMVPFast understood our vision perfectly. They built a beautiful, functional app that exceeded our expectations and helped us validate our market.",
        author: "Marcus Rodriguez",
        role: "Founder",
        company: "EasyNotes"
      },
      tech: ["React Native", "Firebase", "OpenAI API", "RevenueCat"],
      image: "/placeholder.svg"
    },
    {
      title: "WordSmith",
      category: "Web Application",
      description: "AI writing assistant for content creators",
      challenge: "Test market demand for AI writing tools in the creator economy",
      solution: "Web-based writing platform with AI suggestions and content optimization",
      results: [
        { metric: "1K+", label: "Content Creators" },
        { metric: "$25K", label: "Monthly Revenue" },
        { metric: "3 weeks", label: "Time to Market" }
      ],
      testimonial: {
        text: "BuildMVPFast helped us go from idea to profitable MVP in just 3 weeks. The quality and speed were incredible, and the results speak for themselves.",
        author: "Alex Thompson",
        role: "Co-founder",
        company: "WordSmith"
      },
      tech: ["Next.js", "Python", "OpenAI API", "PostgreSQL"],
      image: "/placeholder.svg"
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
    <section id="work" className="py-24 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
      
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
            <span className="text-orange-400 text-sm font-medium">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            MVPs That
            <span className="block text-orange-400 font-normal">Got Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real projects, real founders, real results. See how we've helped startups validate ideas and achieve traction.
          </p>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 mb-16"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image/Visual */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="aspect-video bg-gray-800 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <ExternalLink className="w-8 h-8 text-orange-400" />
                      </div>
                      <h4 className="text-white font-semibold text-lg">{study.title}</h4>
                      <p className="text-gray-400 text-sm">{study.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-300 text-lg mb-4">{study.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">The Challenge</h4>
                    <p className="text-gray-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Our Solution</h4>
                    <p className="text-gray-400">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="text-2xl font-bold text-orange-400 mb-1">{result.metric}</div>
                      <div className="text-sm text-gray-400">{result.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <p className="text-gray-300 italic mb-4">"{study.testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-400 font-semibold text-sm">
                        {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{study.testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{study.testimonial.role}, {study.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-300">MVPs Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">$2M+</div>
                <div className="text-gray-300">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">3.2</div>
                <div className="text-gray-300">Avg. Weeks to Launch</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's build your MVP and add it to our portfolio of successful launches. Your success story starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="border border-gray-600 hover:border-orange-500 text-white font-medium px-8 py-3 rounded-full transition-all duration-200">
                View More Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 