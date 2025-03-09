import React from 'react';

const Contact = () => {
  return (

    <>



<div className="container-xxl py-5 page-header position-relative mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5">
                <h1 className="display-2 text-white animated slideInDown mb-4">Get In Touch</h1>
                
            </div>
        </div>


    <div className="container-fluid py-5">
      <div className="container">
       
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: '75px', height: '75px' }}
            >
              <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
            </div>
            <h6>Salori, Prayagraj, India</h6>
          </div>
          <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
            <div
              className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: '75px', height: '75px' }}
            >
              <i className="fa fa-envelope-open fa-2x text-primary"></i>
            </div>
            <h6>risingstar@gmail.com</h6>
          </div>
          <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
              style={{ width: '75px', height: '75px' }}
            >
              <i className="fa fa-phone-alt fa-2x text-primary"></i>
            </div>
            <h6>+012 345 67890</h6>
          </div>
        </div>
        <div className="bg-light rounded">
          <div className="row g-0">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100 d-flex flex-column justify-content-center p-5">
                <h3 className="mb-4">Our Mission & Vision</h3>
                <p className="mb-4">
                  At Rising Star Public School, our mission is to nurture young minds with a holistic education that fosters creativity, curiosity, and compassion. We aim to create a supportive environment where every child can thrive and achieve their full potential.
                </p>
                <p className="mb-4">
                  Our vision is to be a leading institution in early childhood education, empowering students to become confident, responsible, and innovative thinkers who contribute positively to society.
                </p>
                <a href="/appointment" className="btn btn-primary py-3 px-5">
                  Schedule a Visit
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.280677654576!2d81.85528727511508!3d25.47112597753737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acaa62d5d675b%3A0x36e7b6a91d4b83c0!2sSalori%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211004%2C%20India!5e0!3m2!1sen!2sus!4v1697631234567!5m2!1sen!2sus"
                  frameBorder="0"
                  style={{ minHeight: '400px', border: '0' }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;