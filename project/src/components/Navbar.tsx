import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.95)', 'rgba(255, 255, 255, 0.98)']
  );

  const menuItems = ['Home', 'Services', 'Work', 'About', 'Contact'];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full backdrop-blur-md z-40 px-6 py-4 shadow-lg border border-white/20"
    >
      <div className="flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Code2 className="w-8 h-8 text-purple-600" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            ByteBuster
          </span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-purple-600 relative"
              whileHover={{ scale: 1.1 }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <motion.button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(106, 13, 173, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-gray-600 transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-8 h-0.5 bg-gray-600 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-8 h-0.5 bg-gray-600 transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
      >
        <div className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-700 hover:text-purple-600 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium mx-4 shadow-lg">
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};