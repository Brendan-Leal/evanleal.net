import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useContext, useState } from "react";
import { MenuContext } from "@/pages/_app";
import { Transition } from "@headlessui/react";

export default function Home() {
  const menu = useContext(MenuContext);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Transition
        show={menu.contentVisible}
        // show={toggle}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
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
        <Footer />
      </Transition>
    </>
  );
}
