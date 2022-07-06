import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slides.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  const slideImages = [
    "https://images.thedirect.com/media/article_full/doctor-strange-movies-to-watch.jpg",
    "https://i2.wp.com/bloody-disgusting.com/wp-content/uploads/2012/11/beautiful_creatures_ver2_xlg.jpg",
    "https://see.news/wp-content/uploads/2022/01/share.jpg",
    "https://i.ytimg.com/vi/30kVNJ_S-18/maxresdefault.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D3CDB0945A831C231597EC55CBA6006FFA8C623E6051EBA04EFA2FC1506BD639/scale?width=1200&aspectRatio=1.78&format=jpeg",
    "https://www.cnet.com/a/img/resize/b7044df38fac94026d2ec2b50f52849cefb02abd/2019/04/25/9277c764-601d-4ab3-85f9-9c39d7f1ac5a/avengers-endgame-promo-crop.jpg?auto=webp&fit=crop&height=675&width=1200",
    "https://www.wallpaperbetter.com/wallpaper/419/731/703/rio-2-best-desktop-images-1080P-wallpaper.jpg",
  ];

  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slideImages.map((slide) => {
          return (
            <div className="showCase">
              {" "}
              <SwiperSlide className="slides" key={slide}>
                <img src={slide} alt="" />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
