import Image from "next/image";

export default function Footer() {
  return (
    <footer className="font-unna py-3">
      <div className="text-center py-4  flex flex-col">
        <p>
          Site made possible by&nbsp;
          <a className="underline" href="https://astrolabstudio.com">
            Astrolab Studio
          </a>
          &nbsp; &nbsp;
          <Image
            src="/img/astrolab-logo.png"
            alt="astrolab logo"
            width={25}
            height={25}
            className="inline"
          />
        </p>
        <p>&copy; copyright {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
