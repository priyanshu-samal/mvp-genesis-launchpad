import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  MessageSquare,
  Database,
  Shield,
  Zap,
  TrendingUp
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Full-stack web apps with modern frameworks and responsive design",
      features: ["React/Next.js frontend", "Node.js/Python backend", "Database integration", "User authentication"],
      timeframe: "3-4 weeks",
      price: "From $15K"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      features: ["React Native development", "Native performance", "Push notifications", "Offline functionality"],
      timeframe: "4-5 weeks",
      price: "From $20K"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Complete online stores with payment processing and inventory management",
      features: ["Payment gateway integration", "Inventory management", "Order processing", "Analytics dashboard"],
      timeframe: "4-5 weeks",
      price: "From $25K"
    },
    {
      icon: Users,
      title: "SaaS Platforms",
      description: "Subscription-based software with user management and billing",
      features: ["Multi-tenant architecture", "Subscription billing", "User roles & permissions", "API development"],
      timeframe: "4-6 weeks",
      price: "From $30K"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboards",
      description: "Data visualization and business intelligence platforms",
      features: ["Real-time data processing", "Interactive charts", "Custom reporting", "Data export"],
      timeframe: "3-4 weeks",
      price: "From $18K"
    },
    {
      icon: MessageSquare,
      title: "Communication Tools",
      description: "Chat, video, and collaboration platforms for teams",
      features: ["Real-time messaging", "Video conferencing", "File sharing", "Team management"],
      timeframe: "4-5 weeks",
      price: "From $22K"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Launch your MVP in 3-4 weeks, not months"
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Built with scalability and security in mind"
    },
    {
      icon: TrendingUp,
      title: "Growth Focused",
      description: "Optimized for user acquisition and retention"
    },
    {
      icon: Database,
      title: "Modern Stack",
      description: "Latest technologies for performance and maintainability"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30" />
      
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
            <span className="text-orange-400 text-sm font-medium">What We Build</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            MVP Types We
            <span className="block text-orange-400 font-normal">Specialize In</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From simple web apps to complex SaaS platforms, we build MVPs that validate your idea and attract early users.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-orange-500/30 transition-all duration-300 hover:bg-gray-900/70">
                {/* Icon */}
                <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-orange-400" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-1 h-1 bg-orange-400 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Pricing & Timeline */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="text-sm text-gray-400">
                    <span className="block font-medium text-orange-400">{service.timeframe}</span>
                    <span>Timeline</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="block font-medium text-white">{service.price}</span>
                    <span>Starting Price</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Why Choose BuildMVPFast?
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We don't just build MVPs — we build MVPs that help you validate ideas, attract users, and raise funding.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
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
          <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Not Sure What Type of MVP You Need?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your idea and determine the best approach for your MVP. We'll help you choose the right technology stack and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-orange-500/25">
                Get Free Consultation
              </button>
              <button className="border border-gray-600 hover:border-orange-500 text-white font-medium px-8 py-3 rounded-full transition-all duration-200">
                View Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 