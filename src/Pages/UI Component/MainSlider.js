import React from "react"
import "../../style/MainSlider.scss"
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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
                <p>Слайд 1</p>
            </div>
        </SwiperSlide>

        <SwiperSlide  >
            <div className="swiper__slide">
            <p>Слайд 2</p>
            </div>
        </SwiperSlide>

        <SwiperSlide  >
            <div className="swiper__slide">
            <p>Слайд 3</p>
            </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
};

export default MainSlider;
