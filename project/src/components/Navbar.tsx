import { useState, useEffect } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const scrollY = useMotionValue(0);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']
  );

  const menuItems = [
    { name: 'Home', id: '#home' },
    { name: 'Services', id: '#services' },
    { name: 'Work', id: '#work' },
    { name: 'About', id: '#about' },
    { name: 'Contact', id: '#contact' },
    { name: 'Career', route: '/careers' },
  ];

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false); // Hide navbar on scroll down
        } else {
          setIsVisible(true); // Show navbar on scroll up
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Scroll to section
  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/'); // Navigate to homepage
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay to ensure the DOM is ready after navigation
    } else {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full backdrop-blur-md z-40 px-6 py-4 shadow-lg border border-white/20 transition-transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            ByteBuster
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) =>
            item.route ? (
              <motion.a
                key={item.name}
                onClick={() => navigate(item.route)}
                className="text-gray-700 hover:text-purple-600 relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ) : (
              <motion.a
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-purple-600 relative cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            )
          )}
          <motion.button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(106, 13, 173, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-2">
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-all ${
                isOpen ? 'rotate-45 translate-y-2.5' : ''
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-8 h-0.5 bg-gray-600 transition-all ${
                isOpen ? '-rotate-45 -translate-y-2.5' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      >
        <div className="flex flex-col items-center space-y-4">
          {menuItems.map((item) =>
            item.route ? (
              <a
                key={item.name}
                onClick={() => {
                  navigate(item.route);
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 cursor-pointer"
              >
                {item.name}
              </a>
            ) : (
              <a
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-purple-600 px-4 py-2 cursor-pointer"
              >
                {item.name}
              </a>
            )
          )}
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg"
            onClick={() => {
              scrollToSection('#contact');
              setIsOpen(false);
            }}
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};
