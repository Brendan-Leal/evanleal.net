import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "../../constants/navLink";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [spotifyImg, setSpotifyImg] = useState("/img/spotify-white.png");

  const [ytImg, setYoutubeImg] = useState("/img/youtube-white.png");

  const [appleImg, setAppleImg] = useState("/img/apple-white.png");

  return (
    // Desktop Nav
    <nav className="hidden md:block absolute z-20 ">
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
          <a href="https://open.spotify.com/show/1lKHRsuf2qen2PlnkjEFNV?si=7c44632705e64f66">
            <Image src={spotifyImg} width={25} height={25} alt="spotify icon" />
          </a>
        </li>

        {/* Youtube Logo Desktop */}
        <li
          onMouseEnter={() => setYoutubeImg("/img/yt-full-color.png")}
          onMouseLeave={() => setYoutubeImg("/img/youtube-white.png")}
          className="hover:scale-150 transition-transform"
        >
          <a href="https://www.youtube.com/@ExistencePod">
            <Image src={ytImg} width={25} height={25} alt="youtube icon" />
          </a>
        </li>

        {/* Apple Logo Desktop */}
        <li
          onMouseEnter={() => setAppleImg("/img/apple-full-color.png")}
          onMouseLeave={() => setAppleImg("/img/apple-white.png")}
          className="hover:scale-150 transition-transform"
        >
          <a href="https://podcasts.apple.com/us/podcast/existence/id1636717921">
            <Image src={appleImg} width={25} height={25} alt="apple icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
