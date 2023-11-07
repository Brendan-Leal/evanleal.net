import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Head from "next/head";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="relative">
        <Hero />
        <div className="relative pb-[177.77%] md:hidden">
          <iframe
            src="https://player.vimeo.com/video/878767356?h=969f89f8ac"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        <div className="relative pb-[40%] hidden md:block">
          <iframe
            src="https://player.vimeo.com/video/878695968?h=d3e0e46ed4"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

        {/* Quote  */}
        <div className="font-unna text-base text-center flex items-center justify-center gap-2 my-6 px-12">
          <div className="w-[1px] h-[100px] bg-title-red "></div>
          <div className="flex-col">
            <p>
              &quot;The mystery of human existence lies not in just staying
              alive, but in finding something to live for.&quot;
            </p>
            <p>- Fyodor Dostoyevsky</p>
          </div>
        </div>
      </div>
      <SocialIcons />
      <Footer />
    </>
  );
}
