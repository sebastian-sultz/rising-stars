import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* Get In Touch Column */}
          <div className="col-lg-4 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Salori, Prayagraj, India</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>risingstar@gmail.com</p>
          </div>

          {/* Quick Links Column */}
          <div className="col-lg-4 col-md-6">
            <h3 className="text-white mb-4">Quick Links</h3>
            <Link to="/about" className="btn btn-link text-white">About Us</Link>
            <Link to="/facilities" className="btn btn-link text-white">Facilities</Link>
            <Link to="/academics" className="btn btn-link text-white">Academics</Link>
            <Link to="/contact" className="btn btn-link text-white">Contact Us</Link>
          </div>

          {/* Photo Gallery Column */}
          <div className="col-lg-4 col-md-6">
            <h3 className="text-white mb-4">Photo Gallery</h3>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-1.jpg" alt="" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-2.jpg" alt="" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-3.jpg" alt="" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-4.jpg" alt="" style={{ width: '90px', height: '90px', objectFit: 'cover' }} />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-5.jpg" alt="" style={{ width: '90px', height: '90px'}} />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-6.jpg" alt="" style={{ width: '90px', height: '90px'  }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;