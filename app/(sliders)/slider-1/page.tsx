"use client";

import Card from "@/components/first-slider/Card";
import NavigationBtn from "@/components/first-slider/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AImage from "images/slider-1/1.svg";
import BImage from "images/slider-1/2.svg";
import CImage from "images/slider-1/3.svg";
import NavigationMobile from "@/components/first-slider/navigation-mobile";

export default function FirstSlider() {
  return (
    <section className="wrapper-slider rounded-3xl h-[450px] relative overflow-hidden">
      <div className="h-full p-4 pb-32 lg:pb-10 lg:p-10 overflow-hidden">
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1280: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={{
            enabled: true,
            nextEl: ".swiper-button-next-custom-1",
            prevEl: ".swiper-button-prev-custom-1",
            disabledClass: "swiper-button-disabled",
          }}
          freeMode={true}
          modules={[Navigation, FreeMode]}
          className="h-full"
        >
          <SwiperSlide>
            <Card image={AImage} />
          </SwiperSlide>

          <SwiperSlide>
            <Card image={BImage} />
          </SwiperSlide>

          <SwiperSlide>
            <Card image={CImage} />
          </SwiperSlide>

          <SwiperSlide>
            <Card image={AImage} />
          </SwiperSlide>

          <SwiperSlide>
            <Card image={BImage} />
          </SwiperSlide>

          <SwiperSlide>
            <Card image={CImage} />
          </SwiperSlide>
        </Swiper>
      </div>

      <NavigationBtn />
      <NavigationMobile />
    </section>
  );
}
