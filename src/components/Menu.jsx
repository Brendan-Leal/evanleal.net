import Image from "next/image";

export default function Menu({ toggleMenu, menuOpen }) {
  return (
    <div
      className={`${
        menuOpen ? "flex" : "hidden"
      } bg-off-white w-screen h-screen text-cinema-black flex-col`}
    >
      <div onClick={toggleMenu} className="">
        <Image src="/img/dismiss.png" width={40} height={40} alt="" />
      </div>
      <a>Home</a>
      <a>Podcast</a>
    </div>
  );
}
