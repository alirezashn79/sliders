import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Card({ image }: { image: string }) {
  return (
    <div className="bg-primaryBlack h-full rounded-3xl">
      <div className="h-full w-full p-6 flex flex-col">
        <div className="flex-1">
          <Image alt="image" height={60} width={60} src={image} />
        </div>
        <div className="flex-1 space-y-3">
          <span className="uppercase font-bold text-primaryYellow text-4xl">
            logo design
          </span>
          <p className="text-pretty text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            id.
          </p>
        </div>
        <div className="flex-1 flex items-end justify-end">
          <a
            href="#"
            className="bg-transparent text-primaryYellow hover:bg-primaryYellow/30 transition-colors border border-primaryYellow p-2.5 px-4 inline-block rounded-xl group"
          >
            <FaArrowLeftLong className="rotate-180 h-5 w-5 group-hover:scale-x-125 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
}
