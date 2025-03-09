import React, { useEffect } from 'react';

const BackToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.querySelector('.back-to-top');
      if (window.scrollY > 300) {
        backToTop.style.display = 'block';
        backToTop.style.opacity = '1';
      } else {
        backToTop.style.opacity = '0';
        setTimeout(() => {
          backToTop.style.display = 'none';
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square back-to-top d-flex align-items-center justify-content-center"
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
      style={{ transition: 'opacity 0.5s' }}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
};

export default BackToTop;