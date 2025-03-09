import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

const HeaderCarousel = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <Swiper
        className="header-carousel position-relative"
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={1500}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
      >
        <SwiperSlide className="owl-carousel-item position-relative">
          <img className="img-fluid" src="/img/carousel-1.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, .2)' }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    The Best Foundation School For Your Child
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Where little steps today lead to big achievements tomorrow.
                  </p>
                  <Link to="/about" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                    Learn More
                  </Link>
                  <Link to="/academics" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                    Our Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="owl-carousel-item position-relative">
          <img className="img-fluid" src="/img/carousel-2.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: 'rgba(0, 0, 0, .2)' }}
          >
            <div className="container">
              <div class="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-2 text-white animated slideInDown mb-4">
                    Helping your child grow, learn, and succeed.
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Nurturing young minds with love, care, and curiosity.
                  </p>
                  <Link to="/about" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">
                    Learn More
                  </Link>
                  <Link to="/academics" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">
                    Our Classes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div className="swiper-button-prev"><i className="bi bi-chevron-left"></i></div>
        <div className="swiper-button-next"><i className="bi bi-chevron-right"></i></div>
      </Swiper>
    </div>
  );
};

export default HeaderCarousel;