import React from "react"
import "../../style/MainSlider.scss"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Slide1 from "../../images/slide1.png"
import Slide2 from "../../images/slide2.png"
import Slide3 from "../../images/slide3.png"

const MainSlider = () => {
  return (
    <div className="MainSlider">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        loop={true}
      >
        <SwiperSlide  >
            <div className="swiper__slide">
                <img src={Slide1} />
            </div>
        </SwiperSlide>

        <SwiperSlide  >
            <div className="swiper__slide">
            <img src={Slide2} />
            </div>
        </SwiperSlide>

        <SwiperSlide  >
            <div className="swiper__slide">
            <img src={Slide3} />
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
};

export default MainSlider;
