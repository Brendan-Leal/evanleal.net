import { Transition } from "@headlessui/react";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "../../constants/navLink";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
useState;

export default function Nav({ menuOpen, setMenuOpen }) {
  const [spotifyImg, setSpotifyImg] = useState("/img/spotify-white.png");

  const [ytImg, setYoutubeImg] = useState("/img/youtube-white.png");

  const [appleImg, setAppleImg] = useState("/img/apple-white.png");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <div
        onClick={toggleMenu}
        className={`absolute z-50 right-0 pr-4 pt-12 flex flex-col items-end gap-1 md:hidden ${
          menuOpen ? "hidden" : ""
        }`}
      >
        <div className="w-12 h-1 bg-off-white rounded-lg"></div>
        <div className="w-6 h-1 bg-off-white rounded-lg"></div>
      </div>

      <Transition
        show={menuOpen}
        enter="transform transition cubic-bezier(.17,.67,.21,.26) duration-500"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition cubic-bezier(.17,.67,.21,.26) duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <MobileMenu toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </Transition>
      {/* Desktop Menu */}
      <div className="hidden md:block absolute z-20 ">
        <ul className="flex flex-row w-screen justify-center items-center gap-10 font-unna text-desktop-md pt-4">
          {NAV_LINKS.map((link, i) => (
            <li key={i} className="hover:underline transition-all">
              <Link href={`${link.path}`}>{link.name}</Link>
            </li>
          ))}
          {/* Spotify Logo Desktop */}
          <li
            onMouseEnter={() => setSpotifyImg("/img/spotify-color.png")}
            onMouseLeave={() => setSpotifyImg("/img/spotify-white.png")}
            className="hover:scale-150 transition-transform"
          >
            <Link href="https://open.spotify.com/show/1lKHRsuf2qen2PlnkjEFNV?si=7c44632705e64f66">
              <Image
                src={spotifyImg}
                width={25}
                height={25}
                alt="spotify icon"
              />
            </Link>
          </li>

          {/* Youtube Logo Desktop */}
          <li
            onMouseEnter={() => setYoutubeImg("/img/yt-full-color.png")}
            onMouseLeave={() => setYoutubeImg("/img/youtube-white.png")}
            className="hover:scale-150 transition-transform"
          >
            <Link href="https://www.youtube.com/@ExistencePod">
              <Image src={ytImg} width={25} height={25} alt="youtube icon" />
            </Link>
          </li>

          {/* Apple Logo Desktop */}
          <li
            onMouseEnter={() => setAppleImg("/img/apple-full-color.png")}
            onMouseLeave={() => setAppleImg("/img/apple-white.png")}
            className="hover:scale-150 transition-transform"
          >
            <Link href="https://podcasts.apple.com/us/podcast/existence/id1636717921">
              <Image src={appleImg} width={25} height={25} alt="apple icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
