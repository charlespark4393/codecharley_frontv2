import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import slideImg from "../../assets/images/sliders/banner-2-slide.jpg";

const HomeTwoSlider = () => {

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    margin: 0,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
        }
      }
    ]
  };

  return (
    <React.Fragment>
      <div className="ras-banner ras-banner-2">
        <ModalVideo channel='youtube' isOpen={isOpen} videoId='yzCkM5MRaaI' onClose={() => { openModal(); }} />
        <div className="slider-active">
          <Slider {...sliderSettings}>
            <div className="ras-slide">
              <div className="container">
                <div className="row align-items-center ras-slide-content-wrapper">
                  <div className="col-lg-6">
                    <div className="ras-slide-content">
                      <h3 className="ras-slide-sub-heading primary-text-color">Welcome to CodeCharley</h3>
                      <h2 className="ras-slide-heading">Sensational Software. Digital Solutions.<br />Sensible Prices.</h2>
                      <p className="ras-slide-desc mb-50">Amazing services and unreasonable hospitality. Build and ship your application with confidence.
                      </p>
                      <Link to="/contact" className="btn btn-primary btn-large">Appointment<i className="icofont-long-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ras-slide-image fadeInRight">
                      <div className="slide-img">
                        <img src={slideImg} alt="A Digital & Creative Agency of Intelligent People." />
                      </div>
                      {/* <a className="ras-vid-icon ras-video-lightbox vbox-item more" href="#" onClick={() => { openModal(); }}>
                        <i className="icofont-ui-play"></i>
                      </a>
                      <img src={curlyShape} alt="banner-curve-shape" className="banner-curly-shape" />
                      <img src={bannerDots1} alt="banner-dots-1" className="banner-square-dots-1" />
                      <img src={bannerDots2} alt="banner-dots-2" className="banner-square-dots-2" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeTwoSlider;