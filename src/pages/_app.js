import "@/styles/globals.css";
import Nav from "@/components/Nav";
import { useState, createContext } from "react";

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
      }, 1000);
    } else {
      setContentVisible(!contentVisible);
      setTimeout(() => {
        setMenuOpen(!menuOpen);
      }, 1000);
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
        <main>
          <Component {...pageProps} />
        </main>
      </MenuContext.Provider>
    </div>
  );
}
