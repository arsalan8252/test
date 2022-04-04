import React from "react";
import { Carousel } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Slider.css";
import { Link } from "react-router-dom";

export const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className="myOverlay">
          <img
            className="d-block w-100"
            src="./assests/images/SliderBanner2.jpg"
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item className="myOverlay">
          <img
            className="d-block w-100"
            src="./assests/images/SliderBanner1.jpg"
            alt=""
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export const Swipper1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        autoplay={{ delay: 2500 }}
        className="mySwiper"
        modules={[FreeMode, Autoplay]}
      >
        <SwiperSlide>
          <div className="myOverlay"><img src="./assests/images/casuals/Casual01.png"/></div>
          <Link to="/casual"><h6 className="mt-3">Casual</h6></Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="myOverlay"><img src="./assests/images/formals/afreenRangeMahroonFull.jpg" /></div>
          <Link to="/formal"><h6 className="mt-3">Formals</h6></Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="myOverlay"><img src="./assests/images/prints/printedBlueFront.jpg"/></div>
          <Link to="/print"><h6 className="mt-3">Prints</h6></Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="myOverlay"><img src="./assests/images/shawls/ShawlBeigeFull.jpg"/></div>
          <Link to="/shawl"><h6 className="mt-3">Shawls</h6></Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="myOverlay"><img src="./assests/images/bottoms/BottomRedFull.jpg"/></div>
          <Link to="/bottom"><h6 className="mt-3">Bottoms</h6></Link>
        </SwiperSlide>

        <SwiperSlide>
          <div className="myOverlay"><img src="./assests/images/bareezeMan/manBlack2.jpg"/></div>
          <Link to="/bareezeman"><h6 className="mt-3">Bareeze Man</h6></Link>
        </SwiperSlide>

      </Swiper>
    </>
  );
};
