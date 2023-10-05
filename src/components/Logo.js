import Image from "next/image";

export default function Logo({ src, alt, url, style = null }) {
  return (
    <>
      <div className={style}>
        <a href={url} target="_blank">
          <Image src={src} width={50} height={50} alt={alt} />
        </a>
      </div>
    </>
  );
}
