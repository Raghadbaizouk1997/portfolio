import React from "react";

import { services } from "../../Data";
import { FaArrowRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import shapeOne from "../../assets/shape-1.png";
import shapeSecond from "../../assets/shape-2.png";
// import "./styles.css";
import { Pagination } from "swiper";
import "./Services.css";
export const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title text-cs">What I Do</h2>
      <p className="section__subtitle">
        My <span>Services</span>
      </p>

      <Swiper
        className="services__container container mySwiper"
        spaceBetween= {30}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
      >
        {services.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide key={index} className="services__item card card-one">
              <span className="services__subtitle text-cs">{name}</span>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
              {/* <a href="" className="link">
                See Pricing
                <FaArrowRight className="link__icon"></FaArrowRight>
              </a> */}

              <img src={shapeSecond} className="shape c__shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">
          Services
        </span>
      </div>
    </section>
  );
};
