import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Building2,
  ShoppingBag,
  Briefcase,
  Stethoscope,
  Plane,
  Gamepad,
} from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'Digital solutions for property management and real estate marketing',
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Scalable online store solutions with seamless user experience',
  },
  {
    icon: Briefcase,
    title: 'Finance',
    description: 'Secure and efficient systems for financial institutions',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare',
    description: 'Digital healthcare solutions and patient management systems',
  },
  {
    icon: Plane,
    title: 'Travel',
    description: 'Booking systems and travel management platforms',
  },
  {
    icon: Gamepad,
    title: 'Entertainment',
    description: 'Interactive platforms for gaming and entertainment',
  },
];

export const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver tailored solutions across various industries, helping businesses thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              {/* Icon Section */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-8 h-8 text-brand-purple" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-purple transition-colors duration-300">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
