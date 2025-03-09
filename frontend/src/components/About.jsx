import React from 'react';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-4">Explore Our Vision and Vibrant Cultural Programs</h1>
            <p>
              At our school, we believe in nurturing young minds through a perfect blend of academics and cultural
              experiences. Our vibrant cultural programs encourage creativity, teamwork, and self-expression, helping
              children develop confidence and a deep appreciation for traditions. Clita erat ipsum et lorem et sit, sed
              stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <p className="mb-4">
              Through music, dance, art, and festivals, we create an environment where learning extends beyond
              textbooks, fostering well-rounded individuals ready to embrace the world with knowledge and values.
            </p>
          </div>
          <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div className="row">
              <div className="col-12 text-center">
                <img className="img-fluid w-75 rounded-circle bg-light p-3" src="/img/about-1.jpg" alt="" />
              </div>
              <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                <img className="img-fluid w-100 rounded-circle bg-light p-3" src="/img/about-2.jpg" alt="" />
              </div>
              <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                <img className="img-fluid w-100 rounded-circle bg-light p-3" src="/img/about-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;