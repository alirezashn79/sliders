import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { RiSettings4Line } from "react-icons/ri";

export default function NavigationBtn() {
  return (
    <div
      className={`hidden lg:block absolute transition-all duration-300 right-0  bottom-0 z-30 w-52 bg-white/20 backdrop-blur delay-75 overflow-hidden h-full top-0`}
    >
      <div className="flex flex-col items-center justify-center h-full w-full">
        <div className="gap-x-6 flex items-center justify-center">
          <button className="swiper-button-prev-custom-1 p-2 border-2 border-dashed rounded-lg">
            <FaArrowLeftLong className="h-6 w-6" />
          </button>
          <button className="swiper-button-next-custom-1 p-2 border-2 border-dashed rounded-lg">
            <FaArrowLeftLong className="rotate-180 h-6 w-6" />
          </button>
        </div>
        <button className="absolute bottom-4 p-4 bg-primaryYellow text-primaryBlack flex items-center gap-x-4 font-semibold rounded-2xl">
          <span>All services</span>
          <RiSettings4Line className="h-6 w-6 translate-y-px" />
        </button>
      </div>
    </div>
  );
}
