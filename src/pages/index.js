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
        <video className="w-full h-[100dvh]">
          <source src="/videos/mobile-trailer.mp4" />
        </video>

        {/* Quote  */}
        <div className="font-unna text-base text-center flex items-center justify-center gap-2 my-6 px-12">
          <div className="w-[2px] h-[100px] bg-off-white "></div>
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
