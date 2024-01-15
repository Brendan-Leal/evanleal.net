import Heading from "@/components/Heading";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Heading
        pageTitle="About"
        headingText="About Evan"
        bgImg="/img/about-heading-img.png"
        alt="Evan in a bed of flowers"
        imgPosition="object-bottom object-cover"
      />

      <div className="font-unna text-left max-w-md mx-auto p-4 my-2 md:my-6  md:max-w-3xl grid grid-cols-1 auto-rows-auto ">
        <div className="w-fit">
          <h6 className="text-lg md:text-desktop-lg lg:text-desktop-xl">
            Traveler
            <span className="text-title-red">. </span>
            Thinker
            <span className="text-title-red">. </span>
            Creative
            <span className="text-title-red">. </span>
            Veteran
            <span className="text-title-red">.</span>
          </h6>

          <div className="bg-shadow-yellow h-[1px] mb-2 md:mb-4"></div>
        </div>

        <p className="text-base md:text-desktop-base mb-2 md:mb-4">
          After five years of service in the United States Marine Corps and extensive travel experience throughout the world, I&apos;ve learned that my true interests lie in authentic connections and meaningful conversation. Whether through filmmaking, podcasting, editing, or collaboration I aim to partner with friendly, like-minded people in the pursuit of producing beautiful and captivating work.
        </p>

        <div className="w-fit">
          <h6 className="text-lg md:text-desktop-lg lg:text-desktop-xl">
            Host
            <span className="text-title-red">. </span>
            Editor
            <span className="text-title-red">. </span>
            Director
            <span className="text-title-red">. </span>
            Producer
            <span className="text-title-red">.</span>
          </h6>
          <div className="bg-shadow-yellow h-[1px] mb-2 md:mb-4"></div>
        </div>

        <p className="text-base md:text-desktop-base">
          As an emerging creative, I've dedicated myself to cultivating the knowledge, expertise, and equipment necessary for the purpose of crafting meaningful and artistically distinct content. Pursuing my lifelong passion for podcasting and film production, I understand what&apos;s required to make things happen. If you're on the lookout for a committed and imaginative professional to be part of your team, let's collaborate and create something cool together!
        </p>
      </div>
    </>
  );
}
