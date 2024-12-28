import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiSettings4Line } from "react-icons/ri";

export default function NavigationMobile() {
  return (
    <div className="lg:hidden absolute transition-all duration-300 right-0 left-0  bottom-0 z-30 bg-white/20 backdrop-blur delay-75 overflow-hidden h-1/4">
      <div className="flex items-center justify-around h-full">
        <button className="swiper-button-prev-custom-1 p-2 border-2 border-dashed rounded-lg">
          <FaArrowLeftLong className="h-6 w-6" />
        </button>
        <button className="p-4 bg-primaryYellow text-primaryBlack text-sm flex items-center gap-x-4 font-semibold rounded-3xl">
          <span>All services</span>
          <RiSettings4Line className="h-5 w-5 translate-y-px" />
        </button>
        <button className="swiper-button-next-custom-1 rotate-180 p-2 border-2 border-dashed rounded-lg">
          <FaArrowLeftLong className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
