import "@/styles/globals.css";
import Nav from "@/components/Nav";
import Hamburger from "@/components/Hamburger";
import MobileMenu from "@/components/MobileMenu";
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
  const [visible, setVisible] = useState(false);

  return (
    <div className={`${sultan.variable} ${unna.variable}`}>
      <MenuContext.Provider
        value={{
          visible,
          setVisible,
        }}
      >
        <Hamburger />
        <MobileMenu />
        <Nav />

        <main className={`${visible ? "animate-fade-out hidden" : ""}`}>
          <Component {...pageProps} />
        </main>
      </MenuContext.Provider>
    </div>
  );
}
