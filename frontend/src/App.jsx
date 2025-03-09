import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import WOW from 'wowjs';
import Navbar from './components/Navbar';
import HeaderCarousel from './components/HeaderCarousel';
import Facilities from './components/Facilities';
import About from './components/About';
import Classes from './components/Classes';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import Contact from './components/Contact';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // ✅ Initialize WOW.js when component mounts
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // Prevent initializing again when new content loads
    });
    wow.init();
  }, []);

  // ✅ Remove spinner after content loads
  useEffect(() => {
    const spinnerElement = document.getElementById('spinner');
    if (spinnerElement) {
      spinnerElement.classList.remove('show');
      setLoading(false);
    }
  }, []);

  // ✅ Sticky Navbar Logic
  useEffect(() => {
    const stickyTop = document.querySelector('.sticky-top');

    const handleScroll = () => {
      if (window.scrollY > 300) {
        stickyTop.classList.add('shadow-sm');
        stickyTop.style.top = '0px';
      } else {
        stickyTop.classList.remove('shadow-sm');
        stickyTop.style.top = '-100px';
      }
    };

    // Run the logic once on page load
    if (window.scrollY > 300) handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div className="container-3xl bg-white p-0">
      {loading && (
        <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Classes />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/glimpse" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

function HomeContent() {
  return (
    <>
      <HeaderCarousel />
      <Facilities />
      <About />
      <Classes />
      <Appointment />
    </>
  );
}

export default App;
