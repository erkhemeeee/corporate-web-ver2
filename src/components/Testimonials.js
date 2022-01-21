import style from "../styles/Testimonials.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function Testimonials() {
  return (
    <div className={style.footer_top}>
      <div className={style.top}>
        <h2>TESTIMONIALS</h2>
        <p>What other think about us</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide className={style.slide1}>
          <div className={style.swiper_slide}>
            <h3>Guest</h3>
            <p>
              Gorgeous pool areas, beautiful bar and restaurant, excellent
              service with historic, very well appointed rooms.
            </p>
            <div className={style.star}>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide2}>
          <div className={style.swiper_slide}>
            <h3>Guest</h3>
            <p>
              Gorgeous pool areas, beautiful bar and restaurant, excellent
              service with historic, very well appointed rooms.
            </p>
            <div className={style.star}>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.slide3}>
          <div className={style.swiper_slide}>
            <h3>Guest</h3>
            <p>
              Gorgeous pool areas, beautiful bar and restaurant, excellent
              service with historic, very well appointed rooms.
            </p>
            <div className={style.star}>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
              <i className={(style.fas, style.fa_star)}></i>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonials;
