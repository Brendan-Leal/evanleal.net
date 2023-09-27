import "@/styles/globals.css";
import Nav from "@/components/Nav";
import { useState } from "react";

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

export default function App({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`${sultan.variable} ${unna.variable}`}>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className={` ${menuOpen ? "hidden overflow-hidden" : null}`}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
