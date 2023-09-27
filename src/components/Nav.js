import Menu from "./Menu";

export default function Nav({ menuOpen, setMenuOpen }) {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div
        onClick={toggleMenu}
        className={`absolute z-10 right-0 pr-4 pt-12 flex flex-col items-end gap-1 md:hidden ${
          menuOpen ? "hidden" : ""
        }`}
      >
        <div className="w-12 h-1 bg-off-white rounded-lg"></div>
        <div className="w-6 h-1 bg-off-white rounded-lg"></div>
      </div>
      <Menu toggleMenu={toggleMenu} menuOpen={menuOpen} />
    </div>
  );
}
