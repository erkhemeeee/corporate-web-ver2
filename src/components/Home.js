import style from "../styles/Home.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

function Home() {
  return (
    <div className="swiper_home">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={style.slide1} id="home">
            <img src="./img/logo_png.png" alt="" />
            <h3>corporate hotel convention center</h3>
            <h1>welcome to corporate</h1>
            <p>a place to experience and enjoy the life</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide2} id="home">
            <img src="./img/logo_png.png" alt="" />
            <h3>corporate hotel convention center</h3>
            <h1>welcome to corporate</h1>
            <p>a place to experience and enjoy the life</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.slide3} id="home">
            <img src="./img/logo_png.png" alt="" />
            <h3>corporate hotel convention center</h3>
            <h1>welcome to corporate</h1>
            <p>a place to experience and enjoy the life</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Home;
