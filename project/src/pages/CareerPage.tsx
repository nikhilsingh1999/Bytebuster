
import { motion } from "framer-motion";

const jobs = [
  {
    title: "Software Developer",
    location: "Remote",
    type: "Full-time",
    description:
      "Join our team to develop scalable web solutions using modern tech stacks.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-time",
    description:
      "Design intuitive and beautiful user interfaces that enhance user experiences.",
  },
  {
    title: "Project Manager",
    location: "On-site",
    type: "Full-time",
    description: "Lead and coordinate projects to ensure timely delivery.",
  },
];

const testimonials = [
  {
    name: "Jane Doe",
    position: "Product Manager",
    quote:
      "Working here has been a fantastic experience. The team is supportive, and I've grown professionally.",
  },
  {
    name: "John Smith",
    position: "Frontend Developer",
    quote:
      "The inclusive culture and cutting-edge projects make every day exciting.",
  },
];

const CareerPage = () => {
  return (
    <div className="pt-16  text-white">
      {/* Hero Section */}
      <section className="glassmorphism text-center my-12 py-20 px-4 ">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent">
          Join Our Team
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Shape the future with us. Discover opportunities to grow, learn, and
          innovate.
        </p>
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50">
          View Open Positions
        </button>
      </section>

      {/* About Section */}
      <section className="  py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-white bg-clip-text text-transparent">
            About ByteBusters
          </h2>
          <p className="mt-4 text-gray-300">
            At ByteBusters, we're committed to delivering exceptional solutions
            while fostering a collaborative and innovative work environment.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4  ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">
            Why Join ByteBusters?
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Flexible Work Options</h3>
              <p className="mt-2 text-gray-100">
                Work from anywhere or join us in the office, the choice is
                yours.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Growth Opportunities</h3>
              <p className="mt-2 text-gray-100">
                Unlock your potential with learning programs and mentorship.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">Inclusive Culture</h3>
              <p className="mt-2 text-gray-100">
                Join a diverse and welcoming team where everyone belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white">
            What Our Team Says
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <p className="italic text-gray-300">"{testimonial.quote}"</p>
                <h4 className="mt-4 font-bold">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 px-4 glassmorphism bg-gray-700">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Open Positions</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800  rounded-lg shadow-lg hover:shadow-purple-500/50"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-gray-400">
                  {job.location} | {job.type}
                </p>
                <p className="mt-2 text-gray-300">{job.description}</p>
                <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-800 to-blue-400 rounded-lg font-semibold hover:shadow-lg">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className= " my-3 rounded-lg py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="mt-4 text-gray-300">
            Have questions? Reach out to our HR team at{" "}
            <a href="mailto:hr@bytebusters.com" className="text-blue-400">
              hr@bytebusters.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
