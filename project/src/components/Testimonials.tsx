import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote: 'ByteBusters transformed our digital presence completely. Their attention to detail and innovative solutions exceeded our expectations.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthLabs',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote: 'Working with ByteBusters was a game-changer for our business. They delivered a stunning website that truly represents our brand.',
  },
  {
    name: 'Emma Davis',
    role: 'Marketing Director, Innovate Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote: 'The team at ByteBusters is exceptional. Their expertise and dedication to our project was evident throughout the entire process.',
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-r from-purple-800 via-blue-700 to-purple-800 text-white rounded-2xl shadow-lg p-6 relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-purple-400" />
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-purple-600"
        />
        <div>
          <h4 className="text-lg font-bold">{testimonial.name}</h4>
          <p className="text-blue-300">{testimonial.role}</p>
        </div>
      </div>
      <p className="italic">{testimonial.quote}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 my-3 glassmorphism  bg-gradient-to-br from-[#0B1120] to-[#151C31]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with ByteBusters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
