import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Pen,
  RefreshCw,
  Search,
  Code,
  Monitor,
  Megaphone,
  Settings,
  ShoppingBag,
} from 'lucide-react';

const services = [
  {
    icon: Pen,
    title: 'Graphic Design',
    description: 'Creative designs that capture your brand essence.',
    color: 'bg-red-500',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Transform your digital presence with modern designs.',
    color: 'bg-yellow-500',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Boost your visibility and organic traffic.',
    color: 'bg-purple-500',
  },
  {
    icon: Code,
    title: 'Frontend Developer',
    description: 'Building responsive and interactive web applications.',
    color: 'bg-emerald-500',
  },
  {
    icon: Monitor,
    title: 'Custom Web Development',
    description: 'Tailored solutions for your unique needs.',
    color: 'bg-blue-500',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive growth.',
    color: 'bg-pink-500',
  },
  {
    icon: Settings,
    title: 'Website Support',
    description: 'Ongoing maintenance and technical support.',
    color: 'bg-orange-500',
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce Development',
    description: 'Build powerful online stores.',
    color: 'bg-teal-500',
  },
];

export const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="py-20 glassmorphism my-8" id="services">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            We Love What We Do And We're Proud Of Our Results
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's Create Innovations Together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-6 rounded-xl bg-[#151C31]/50 backdrop-blur-sm hover:bg-[#1A2137]/50 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}
              >
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
