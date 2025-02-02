import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import I from '../Images/4190945.jpg'
import I1 from '../Images/4478838.jpg'
import I2 from '../Images/4627182.jpg'
import I3 from '../Images/4758689.jpg'
import I4 from '../Images/5421915.jpg'

// Work data
const projects = [
  {
    title: 'Mobile App',
    category: 'App Development',
    image: I1,
    tools: ['React Native', 'Firebase'],
  },
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: I3,
    tools: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    image: I2,
    tools: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Mobile App',
    category: 'App Development',
    image: I,
    tools: ['React Native', 'Firebase'],
  },
  {
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    image: I4,
    tools: ['D3.js', 'Python', 'Flask'],
  },
];

// Slider settings
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const Work = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 glassmorphism"  id="work">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-bold mb-4 ">Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a look at some of our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative bg-white shadow-lg rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain object-center"
                  onError={(e) => (e.currentTarget.src = '/fallback-image.png')} // Fallback image
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                  <div className="flex justify-center flex-wrap gap-2 mt-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 text-xs bg-gray-200 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
