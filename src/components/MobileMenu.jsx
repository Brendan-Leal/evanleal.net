import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "../../constants/navLink";
import SocialIcons from "./SocialIcons";
import { useContext } from "react";
import { MenuContext } from "@/pages/_app";

export default function MobileMenu() {
  const menu = useContext(MenuContext);
  const toggle = () => {
    menu.setVisible(!menu.visible);
  };

  return (
    <div
      className={`bg-off-white w-screen h-[100dvh] text-cinema-black flex flex-col justify-between translate-x-full md:hidden will-change-transform ${
        menu.visible ? "animate-slide-in-right " : "hidden"
      } `}
    >
      <div
        onClick={toggle}
        className="absolute w-[40px] h-[40px] right-4 top-4 md:hidden"
      >
        <Image src="/img/dismiss.png" alt="" fill={true} priority />
      </div>

      {/* Page links */}
      <ul className="text-2xl font-unna text-center flex flex-col gap-14 pt-[20dvh]">
        {NAV_LINKS.map((link) => (
          <li key={link.key} onClick={toggle}>
            <Link href={`${link.path}`}>{link.name}</Link>
          </li>
        ))}
        {/* Social Icon List */}
      </ul>
      {/* <div className="pb-4">
        <SocialIcons dark="true" showFullSet={true} />
      </div> */}
    </div>
  );
}
