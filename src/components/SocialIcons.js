import Logo from "./Logo";
import { logoData } from "../../constants/logoData";

export default function SocialIcons({ vertical }) {
  // Deep copy logoData
  let logos = JSON.parse(JSON.stringify(logoData));

  if (vertical) {
    logos = logos.filter((data) => {
      return data.required;
    });
  }
  return (
    <div
      className={`flex ${vertical ? "flex-col" : "flex-row"} justify-around`}
    >
      {logos.map((data) => (
        <Logo
          key={data.key}
          src={data.path}
          alt={data.alt}
          url={data.href}
          style={data.tailwindCSS}
        />
      ))}
    </div>
  );
}
