import Image from "next/image";
import React from "react";
import Profile from "images/slider-3/profile.png";

export default function Card() {
  return (
    <div className=" shadow-card rounded-3xl space-y-4 overflow-hidden bg-primaryBlack p-5">
      <div className="flex items-center gap-4">
        <Image
          height={64}
          width={64}
          alt="profile"
          className="h-12 w-12 rounded-2xl"
          src={Profile}
        />
        <div className="space-y-2">
          <p className="capitalize font-bold text-base">emily johnson</p>
          <p className="capitalize font-normal text-xs">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="h-px border-t-2 border-dashed border-[#3f3f3f]" />
        <div className="absolute left-0 top-0 bottom-0 w-1/6 bg-primaryBlack opacity-70"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-primaryBlack opacity-70"></div>
      </div>

      <div className="text-pretty text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        incidunt voluptatem ratione officiis amet! Ab quas nihil similique
        voluptatibus nostrum, porro, doloribus, blanditiis cumque unde a animi
        voluptate nisi quod.
      </div>
    </div>
  );
}
