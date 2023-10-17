import { useContext } from "react";
import { MenuContext } from "@/pages/_app";

export default function Hamburger() {
  const menu = useContext(MenuContext);

  const toggle = () => {
    menu.setVisible(!menu.visible);
  };
  return (
    <div
      className={`absolute z-50 right-0 pr-4 pt-12 flex flex-col items-end gap-1 md:hidden ${
        !menu.visible ? "" : "animate-fade-out"
        // !menu.visible ? "" : ""
      }`}
      onClick={toggle}
    >
      <div className="w-12 h-1 bg-off-white rounded-lg"></div>
      <div className="w-6 h-1 bg-off-white rounded-lg"></div>
    </div>
  );
}
