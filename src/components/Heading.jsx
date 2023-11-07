import Image from "next/image";

export default function Heading({ headingText, bgImg, alt, imgPosition, headingTextPosition = "" }) {
  return (
    <>
      <div className="relative h-[33dvh] md:h-[50vh] flex flex-col justify-end md:justify-start md:pt-16">
        <div className="absolute z-10 w-screen h-full bg-gradient-to-t from-overlay-black opacity-50 top-0"></div>
        <Image src={bgImg} fill className={imgPosition} alt={alt} />

        <h1 className={`text-5xl md:text-desktop-3xl font-sultan font-bold text-title-red drop-shadow-[2px_2px_3px_#EF9F20] tracking-[.5rem] md:tracking-[2.5rem] z-20 text-center ${headingTextPosition}`}>
          {headingText}
        </h1>
      </div>
    </>
  );
}
