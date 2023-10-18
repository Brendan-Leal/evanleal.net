import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="h-[100dvh] relative grid grid-cols-1 grid-rows-4">
        <Image
          src="/img/pod-in-park.png"
          fill
          sizes="100vw"
          className="hidden object-cover object-right-bottom md:block"
          quality={100}
          priority
          alt="Evan outside podcasting in the park"
        />

        <Image
          src="/img/pod-in-park-mobile.png"
          fill
          sizes="100vw"
          className="object-cover object-bottom md:hidden"
          quality={100}
          priority
          alt="Evan outside podcasting in the park"
        />

        <div className="z-0 w-full h-screen absolute bg-gradient-to-b from-overlay-black top-0 opacity-[0.60]"></div>

        <div className="flex flex-col justify-start items-center row-start-2">
          <h1 className="text-5xl md:text-desktop-3xl font-sultan font-bold text-title-red drop-shadow-[2px_2px_3px_#EF9F20] tracking-[2rem] lg:tracking-[2.5rem] ">
            Evan <br className="md:hidden" /> Leal
          </h1>
        </div>

        <p className="relative font-unna text-xl md:text-desktop-xl row-start-3 mx-auto">
          Podcast Host. Producer.
        </p>
      </div>
    </>
  );
}
