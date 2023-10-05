import "@/styles/globals.css";
import Nav from "@/components/Nav";
import { useState, createContext } from "react";
import {
  TRANSITION_TIME_MS,
  TRANSITION_TIME_CSS,
} from "../../constants/transitionTime";
import { Transition } from "@headlessui/react";

import localFont from "next/font/local";
const sultan = localFont({
  src: "../../public/fonts/Sultan.otf",
  variable: "--font-sultan",
});

import { Unna } from "next/font/google";
const unna = Unna({
  subsets: ["latin"],
  variable: "--font-unna",
  weight: ["400", "700"],
});

export const MenuContext = createContext(null);

export default function App({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(!menuOpen);
      setTimeout(() => {
        setContentVisible(!contentVisible);
      }, TRANSITION_TIME_MS);
    } else {
      setContentVisible(!contentVisible);
      setTimeout(() => {
        setMenuOpen(!menuOpen);
      }, TRANSITION_TIME_MS);
    }
  };

  return (
    <div className={`${sultan.variable} ${unna.variable}`}>
      <MenuContext.Provider
        value={{
          toggleMenu,
          menuOpen,
          contentVisible,
        }}
      >
        <Nav />

        <Transition
          show={contentVisible}
          enter={`transition-opacity ${TRANSITION_TIME_CSS}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave={`transition-opacity ${TRANSITION_TIME_CSS}`}
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <main>
            <Component {...pageProps} />
          </main>
        </Transition>
      </MenuContext.Provider>
    </div>
  );
}
