export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col items-center bg-homepage-hero-mobile md:bg-homepage-hero bg-no-repeat bg-[40%_bottom] md:bg-right lg:bg-[95%_bottom] bg-cover h-screen">
        <div className="z-0 w-full h-screen absolute bg-gradient-to-b from-overlay-black top-0 opacity-[0.60]"></div>

        <h1 className="relative text-5xl text-center pt-16 md:text-desktop-3xl font-sultan font-bold text-title-red drop-shadow-[2px_2px_3px_#EF9F20] tracking-[1rem] lg:tracking-[5rem]">
          Evan
          <br />
          Leal
        </h1>
        <p className="relative font-unna text-xl md:text-desktop-xl">
          Podcast Host. Producer.
        </p>
        <img
          src="/img/chevron-down-solid.svg"
          alt=""
          className="w-8 h-8 absolute bottom-2"
        />
      </div>
    </>
  );
}
