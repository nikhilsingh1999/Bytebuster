import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Proven Expertise',
    description: '10+ years of experience in delivering exceptional digital solutions',
    stat: '100+',
    statText: 'Projects Completed',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Quick turnaround time without compromising on quality',
    stat: '2x',
    statText: 'Faster Delivery',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 customer support and maintenance services',
    stat: '24/7',
    statText: 'Support Available',
  },
  {
    icon: Trophy,
    title: 'Award Winning',
    description: 'Recognized for excellence in digital innovation',
    stat: '50+',
    statText: 'Awards Won',
  },
];

export const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">
            Why Choose ByteBuster?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine innovation with reliability to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white  shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-pink p-[2px] mb-4 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-brand-purple" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-brand-purple">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>

              <div className="pt-4 border-t border-gray-100 w-full">
                <div className="text-3xl font-bold text-brand-purple">{feature.stat}</div>
                <div className="text-sm text-gray-500">{feature.statText}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
