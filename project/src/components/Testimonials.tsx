import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Founder, StartupIndia',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote: 'ByteBusters provided us with a platform that transformed the way we connect with our audience. Their solutions are innovative and tailored to our needs.',
  },
  {
    name: 'Priya Sharma',
    role: 'Director, Digital Innovators',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    quote: 'The ByteBusters team delivered beyond our expectations. Their expertise helped us establish a digital presence that truly resonates with our customers.',
  },
  {
    name: 'Rohan Gupta',
    role: 'Marketing Head, BharatBiz',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80', // New image URL
    quote: 'We couldn’t be happier with ByteBusters. Their creativity and technical skills brought our vision to life, making a lasting impact on our clients.',
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
