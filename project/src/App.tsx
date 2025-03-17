import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Testimonials from './components/Testimonials';
import Careerpage from './pages/Careerpage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JobApplication from './pages/JobApplication';
import Termsandconditions from './pages/Termsandconditions';
import Privacyandpolicy from './pages/Privacyandpolicy';
import Pricingpage from './pages/Pricingpage';

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
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Router>
        <div className="min-h-screen bg-[#0B1120] overflow-x-hidden">
          <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-16">
            <Navbar />
            <Routes>
              {/* Main Page */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Services />
                    <WhyChooseUs />
                    <Industries />
                    <Work />
                    <Testimonials />
                    <About />
                    <Contact />
                  </>
                }
              />
              {/* Career Page */}
              <Route path="/careers" element={<Careerpage />} />
              <Route path="/apply" element={<JobApplication />} />
              <Route path="/pricing" element={<Pricingpage />} />
              {/* Terms & conditions and privacy policy */}
              <Route path="/Terms-conditons" element={ <Termsandconditions />} />
              <Route path="/Privacy-policy" element= {<Privacyandpolicy/> } />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
