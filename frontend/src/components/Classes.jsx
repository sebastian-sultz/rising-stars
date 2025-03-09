import React from 'react';

const Classes = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">School Classes</h1>
          <p>
            Engaging and interactive lessons tailored for young learners. Smart classrooms with innovative teaching
            methods for holistic growth
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="classes-item">
              <div className="bg-light rounded-circle w-75 mx-auto p-3">
                <img className="img-fluid rounded-circle" src="/img/classes-1.jpg" alt="" />
              </div>
              <div className="bg-light rounded p-4 pt-5 mt-n5">
                <a className="d-block text-center h3 mt-3 mb-4" href="">Art & Drawing</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="classes-item">
              <div className="bg-light rounded-circle w-75 mx-auto p-3">
                <img className="img-fluid rounded-circle" src="/img/classes-2.jpg" alt="" />
              </div>
              <div className="bg-light rounded p-4 pt-5 mt-n5">
                <a className="d-block text-center h3 mt-3 mb-4" href="">Color Management</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="classes-item">
              <div className="bg-light rounded-circle w-75 mx-auto p-3">
                <img className="img-fluid rounded-circle" src="/img/classes-3.jpg" alt="" />
              </div>
              <div className="bg-light rounded p-4 pt-5 mt-n5">
                <a className="d-block text-center h3 mt-3 mb-4" href="">Athletic & Dance</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="classes-item">
              <div className="bg-light rounded-circle w-75 mx-auto p-3">
                <img className="img-fluid rounded-circle" src="/img/classes-4.jpg" alt="" />
              </div>
              <div className="bg-light rounded p-4 pt-5 mt-n5">
                <a className="d-block text-center h3 mt-3 mb-4" href="">Language & Speaking</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="classes-item">
              <div className="bg-light rounded-circle w-75 mx-auto p-3">
                <img className="img-fluid rounded-circle" src="/img/classes-5.jpg" alt="" />
              </div>
              <div className="bg-light rounded p-4 pt-5 mt-n5">
                <a className="d-block text-center h3 mt-3 mb-4" href="">Religion & History</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="classes-item">
              <div className="bg-light rounded-circle w-75 mx-auto p-3">
                <img className="img-fluid rounded-circle" src="/img/classes-6.jpg" alt="" />
              </div>
              <div className="bg-light rounded p-4 pt-5 mt-n5">
                <a className="d-block text-center h3 mt-3 mb-4" href="">General Knowledge</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;