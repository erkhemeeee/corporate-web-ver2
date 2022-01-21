import style from "../styles/Rooms.module.css";
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
    <div className={style.room}>
      <div className={style.roomSwiper}>
        <h1>
          <span>rooms</span> accommodation
        </h1>
        <p>
          Designed as a privileged almost private place where you will feel
          right at home
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={true}
          speed={1000}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide className={style.slide1}>
            <div className={style.swiper_slide}>
              <div className={style.image}>
                <img src="/img/classic_room.jpg" alt="" />
              </div>
              <div className={style.details}>
                <h1>Classic room</h1>
                <p>Single room</p>
                <div className={style.price}>
                  <button>book now</button>
                  <p>
                    500,000₮ / per night
                    <br />
                    03 зочин 25м2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide2}>
            <div className={style.swiper_slide}>
              <div className={style.image}>
                <img src="/img/classic_room.jpg" alt="" />
              </div>
              <div className={style.details}>
                <h1>Classic room</h1>
                <p>Single room</p>
                <div className={style.price}>
                  <button>book now</button>
                  <p>
                    500,000₮ / per night
                    <br />
                    03 зочин 25м2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={style.slide3}>
            <div className={style.swiper_slide}>
              <div className={style.image}>
                <img src="/img/classic_room.jpg" alt="" />
              </div>
              <div className={style.details}>
                <h1>Classic room</h1>
                <p>Single room</p>
                <div className={style.price}>
                  <button>book now</button>
                  <p>
                    500,000₮ / per night
                    <br />
                    03 зочин 25м2
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={style.back_color}></div>
    </div>
  );
}

export default Testimonials;
