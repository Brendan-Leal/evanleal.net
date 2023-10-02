import Logo from "./Logo";
import { logoData } from "../../constants/logoData";

export default function SocialIcons({
  vertical = false,
  dark = false,
  showFullSet = false,
}) {
  // Deep copy logoData
  let logos = JSON.parse(JSON.stringify(logoData));

  return (
    <div
      className={`flex ${
        vertical ? "flex-col" : "flex-row"
      } items-center justify-around`}
    >
      {logos.map((data) => (
        <Logo
          key={data.key}
          src={`${dark ? data.darkFilePath : data.lightFilePath}`}
          alt={data.alt}
          url={data.href}
          style={`${showFullSet ? "" : data.tailwindCSS}`}
        />
      ))}
    </div>
  );
}
