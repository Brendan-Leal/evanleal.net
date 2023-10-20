import Logo from "./Logo";
import { logoData } from "../../constants/logoData";

export default function SocialIcons({
  vertical = false,
  dark = false,
  showFullSet = false,
}) {
  return (
    <div
      className={`flex ${
        vertical ? "flex-col" : "flex-row"
      } items-center justify-around`}
    >
      {logoData.map((data) => (
        <Logo
          key={data.key}
          src={`${dark ? data.darkFilePath : data.lightFilePath}`}
          alt={data.alt}
          url={data.href}
          className={`${showFullSet ? "" : data.tailwindCSS}`}
        />
      ))}
    </div>
  );
}
