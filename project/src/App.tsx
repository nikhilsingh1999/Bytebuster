import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Industries } from './components/Industries';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from './components/Testimonials';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      <div className="min-h-screen bg- overflow-x-hidden">
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Services />
          <WhyChooseUs />
          <Industries />
          <Work />
          <Testimonials />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App;