import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Why Trust Us", href: "#why-us" },
    { name: "Our Work", href: "#work" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Pricing", href: "#pricing" },
    { name: "Doubt", href: "#doubts" },
  ];

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-transparent"
        >
          <div className="max-w-5xl mx-auto px-8 lg:px-16 mt-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo and Brand */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-md flex items-center justify-center">
                  <span className="text-black font-bold text-sm">B</span>
                </div>
                <span className="text-white font-bold text-xl">BuildMVPFast</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              {/* Right Side Button */}
              <div className="hidden lg:flex items-center">
                <a
                  href="https://cal.com/priyanshu-samal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="sm" 
                    className="bg-white text-black hover:bg-gray-100 font-medium shadow-lg transition-all duration-200 rounded-full px-6"
                  >
                    Book a Call
                  </Button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleMenu}
                  className="text-white hover:bg-gray-800"
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="lg:hidden mt-4 mb-4"
                >
                  <div className="bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-800 p-4">
                    <div className="flex flex-col space-y-4">
                      {navItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 py-2 font-medium"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                      <div className="border-t border-gray-700 pt-4">
                        <a
                          href="https://cal.com/priyanshu-samal"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button 
                            size="sm" 
                            className="w-full bg-white text-black hover:bg-gray-100 font-medium shadow-lg rounded-full"
                          >
                            Book a Call
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
