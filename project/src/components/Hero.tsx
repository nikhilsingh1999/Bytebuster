import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import I1 from '../Images/Dalle.webp';

export const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-16 my-12 bg-[#0B1120] relative overflow-hidden" id="home">
      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-[#FF00FF]/20 rounded-full blur-xl z-10"
        animate={{ y: [-20, 20], x: [-10, 10] }}
        transition={{ repeat: Infinity, duration: 5, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-20 h-20 bg-[#00FFFF]/20 rounded-full blur-xl z-10"
        animate={{ y: [20, -20], x: [10, -10] }}
        transition={{ repeat: Infinity, duration: 6, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl z-10"
        animate={{ y: [-15, 15], x: [-5, 5] }}
        transition={{ repeat: Infinity, duration: 4, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl z-10"
        animate={{ y: [15, -15], x: [5, -5] }}
        transition={{ repeat: Infinity, duration: 7, repeatType: "reverse" }}
      />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 relative z-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  'Welcome to Digital world',
                  2000,
                  'Creating best for you',
                  2000,
                  'Transforming Ideas into business',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block"
              />
            </div>

            <span className="block mt-2">That Drive Impact</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl">
            From websites to apps, we create digital experiences that stand out and drive results for your business.
          </p>

          <motion.button
            className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium text-lg shadow-lg hover:shadow-[#FF00FF]/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </motion.button>
        </motion.div>

<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative w-full h-full flex items-center justify-center"
>
  {/* Background Image */}
  <img
    src={I1}
    alt="Modern Development"
    className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[400px] object-cover"
  />

  {/* Floating Element 1 */}
  
  <motion.div
    className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 p-6 rounded-xl bg-[#151C31]/80 backdrop-blur-sm shadow-xl z-20"
    animate={{
      x: [-30, 30], // Increased horizontal movement range
      y: [-20, 20], // Increased vertical movement range
    }}
    transition={{
      repeat: Infinity,
      duration: 3, // Longer duration for smoother movement
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-[#FF00FF] rounded-lg flex items-center justify-center">
        <span className="text-2xl">⚡</span>
      </div>
      {/* Hide text for mobile */}
      <div className="hidden sm:block">
        <h3 className="text-white font-bold">Fast Development</h3>
        <p className="text-gray-400">Quick turnaround time</p>
      </div>
    </div>
  </motion.div>

  {/* Floating Element 2 */}
  <motion.div
    className="absolute top-8 right-8 sm:top-12 sm:right-12 p-6 rounded-xl bg-[#151C31]/80 backdrop-blur-sm shadow-xl z-20"
    animate={{
      x: [-40, 40], // Larger horizontal range
      y: [-30, 30], // Larger vertical range
    }}
    transition={{
      repeat: Infinity,
      duration: 4, // Slightly different duration for variation
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  >
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-[#00FFFF] rounded-lg flex items-center justify-center">
        <span className="text-2xl">🚀</span>
      </div>
      {/* Hide text for mobile */}
      <div className="hidden sm:block">
        <h3 className="text-white font-bold">Modern Solutions</h3>
        <p className="text-gray-400">Latest technologies</p>
      </div>
    </div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};
