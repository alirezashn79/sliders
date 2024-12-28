"use client";

import Card from "@/components/second-slider/Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function page() {
  return (
    <section>
      <div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          pagination={{
            enabled: true,
            type: "bullets",
            clickable: true,
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          slideClass="swiper-slide-custom"
          slideActiveClass="swiper-slide-custom-active"
          modules={[Pagination]}
          className="!pb-10 lg:!pb-20"
        >
          <SwiperSlide className="swiper-slide-custom">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <Card />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide-custom">
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
