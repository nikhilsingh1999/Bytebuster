import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Users, Target, Clock, Award } from 'lucide-react';

const stats = [
  { icon: Users, end: 100, label: 'Happy Clients' },
  { icon: Target, end: 150, label: 'Projects Completed' },
  { icon: Clock, end: 10, label: 'Years Experience' },
  { icon: Award, end: 25, label: 'Awards Won' },
];

const founders = [
  {
    name: "Satyam Tiwari",
    title: "Co-Founder & Digital Strategist",
    image: "https://i.postimg.cc/s28qGDzD/Whats-App-Image-2025-01-11-at-12-51-29-PM.jpg", // Replace with actual image path
    bio: "Satyam Tiwari brings a wealth of expertise in digital strategy and client relationships, ensuring Byte Buster delivers value-driven results on every project.",
  },
  {
    name: "Nikhil Singh",
    title: "Co-Founder & Lead Developer",
    image: "https://i.postimg.cc/zXdGsRWc/profile-DP.png", // Replace with actual image path
    bio: "Nikhil Singh is the tech powerhouse behind Byte Buster, spearheading innovative solutions and guiding the team to success with over 10 years of experience.",
  },
];

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 glassmorphism my-4 bg-gradient-to-br from-[#0B1120] to-[#151C31]" id="about">
      <div className="container mx-auto">
        {/* Intro Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">About Byte Buster</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            We're a team of passionate developers, designers, and digital strategists dedicated to creating exceptional digital experiences that drive real business results.
          </p>
        </motion.div>

        {/* Stats Section */}
      
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#1A2137] text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#FF00FF]/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-[#FF00FF]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {inView && <CountUp start={0} end={stat.end} duration={5} />}
                +
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      
        {/* Founders Section */}

        <div className="grid md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center bg-[#1A2137] p-8 rounded-2xl text-center"
            >

              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 rounded-full mb-6 border-4 border-[#FF00FF]/50"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
              <p className="text-[#FF00FF] font-semibold mb-4">{founder.title}</p>
              <p className="text-gray-400">{founder.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
  };

