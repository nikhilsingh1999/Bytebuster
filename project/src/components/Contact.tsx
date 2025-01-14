import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    success: false,
    loading: false,
    error: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ success: false, loading: true, error: false });

    emailjs
      .send(
        "service_iaknoup",
        "template_ruk8iqh",
        formData,
        "T0qkE3A68WORTYdXF"
      )
      .then(() => {
        setStatus({ success: true, loading: false, error: false });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus({ success: false, loading: false, error: true });
      });
  };

  return (
    <section className="py-20 glassmorphism my-8" id="contact">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We’re here to answer your questions and start a conversation about your next big project. Reach out today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8 bg-[#1A2137]/50 p-8 rounded-xl shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-lg bg-[#151C31] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF00FF] transition"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-5 py-4 rounded-lg bg-[#151C31] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF00FF] transition"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-5 py-4 rounded-lg bg-[#151C31] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#00FFFF] transition"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-lg bg-[#151C31] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF00FF] transition"
                required
              />
            </div>
            <motion.button
              type="submit"
              className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] text-white font-semibold text-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status.loading}
            >
              {status.loading ? "Submitting..." : "Drop Message"}
            </motion.button>

            {/* Success/Failure Message */}
            {status.success && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-green-500 font-medium text-center"
              >
                Message sent successfully!
              </motion.div>
            )}
            {status.error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-red-500 font-medium text-center"
              >
                Something went wrong. Please try again.
              </motion.div>
            )}
          </motion.form>
         {/* Contact Information */}
          <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8 }}
  className="lg:col-span-2 space-y-8"
>
<div className="flex items-start space-x-6 bg-[#151C31]/50 backdrop-blur-sm p-6 rounded-lg">
    <div className="w-12 h-12 rounded-lg bg-[#151C31] flex items-center justify-center flex-shrink-0">
      <Phone className="w-6 h-6 text-[#25D366]" /> {/* WhatsApp icon color */}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">WhatsApp Us</h3>
      <p className="text-gray-400">
        <a
          href="https://wa.me/15551234567"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#25D366] transition-colors"
        >
          +1 (555) 123-4567
        </a>
      </p>
      <p className="text-gray-400">Reach us instantly via WhatsApp!</p>
    </div>
  </div>




  <div className="flex items-start space-x-6 bg-[#151C31]/50 backdrop-blur-sm p-6 rounded-lg">
    <div className="w-12 h-12 rounded-lg bg-[#151C31] flex items-center justify-center flex-shrink-0">
      <Mail className="w-6 h-6 text-[#FF00FF]" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
      <p className="text-gray-400">hello@bytebuster.com</p>
      <p className="text-gray-400">support@bytebuster.com</p>
    </div>
  </div>

  <div className="flex items-start space-x-6 bg-[#151C31]/50 backdrop-blur-sm p-6 rounded-lg">
    <div className="w-12 h-12 rounded-lg bg-[#151C31] flex items-center justify-center flex-shrink-0">
      <Phone className="w-6 h-6 text-[#00FFFF]" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
      <p className="text-gray-400">+1 (555) 123-4567</p>
      <p className="text-gray-400">+1 (555) 987-6543</p>
    </div>
  </div>

  <div className="flex items-start space-x-6 bg-[#151C31]/50 backdrop-blur-sm p-6 rounded-lg">
    <div className="w-12 h-12 rounded-lg bg-[#151C31] flex items-center justify-center flex-shrink-0">
      <MapPin className="w-6 h-6 text-[#FF00FF]" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
      <p className="text-gray-400">123 Innovation Street</p>
      <p className="text-gray-400">Tech City, TC 12345</p>
    </div>
  </div>


</motion.div>

        </div>
      </div>
    </section>
  );
};
