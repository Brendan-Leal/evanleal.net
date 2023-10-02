import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants/navLink";
import SocialIcons from "./SocialIcons";

export default function Menu({ toggleMenu, menuOpen }) {
  return (
    <div
      className={`${
        menuOpen ? "flex" : "hidden"
      } bg-off-white w-screen h-screen text-cinema-black flex-col justify-between`}
    >
      <div
        onClick={toggleMenu}
        className="absolute w-[40px] h-[40px] right-4 top-4"
      >
        <Image src="/img/dismiss.png" alt="" fill={true} />
      </div>
      {/* Page links */}
      <ul className="text-2xl font-unna text-center flex flex-col gap-14 pt-[20dvh]">
        {NAV_LINKS.map((link) => (
          <li key={link.key} onClick={toggleMenu}>
            <Link href={`${link.path}`}>{link.name}</Link>
          </li>
        ))}
        {/* Social Icon List */}
      </ul>
      <div className="pb-8">
        <SocialIcons dark="true" showFullSet={true} />
      </div>
    </div>
  );
}
