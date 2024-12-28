import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 px-10 flex items-center justify-evenly text-xl">
      <Link href={"/slider-1"}>Slider-1</Link>
      <Link href={"/slider-3"}>Slider-3</Link>
    </div>
  );
}
