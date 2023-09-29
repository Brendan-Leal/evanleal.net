import Image from "next/image";

export default function Heading({
  headingText,
  bgImg,
  position,
  alt,
}) {
  return (
    <>
      <div className="relative h-[33dvh] flex flex-col justify-end">
        <div className="absolute z-10 w-screen h-full bg-gradient-to-t from-overlay-black opacity-50"></div>
        <Image
          src={bgImg}
          fill={true}
          objectFit="cover"
          objectPosition={position}
          alt={alt}
        />
        <h1 className="text-5xl text-center font-sultan font-bold text-title-red drop-shadow-[2px_2px_3px_#EF9F20] tracking-[.5rem] z-20">
          {headingText}
        </h1>
      </div>
    </>
  );
}
