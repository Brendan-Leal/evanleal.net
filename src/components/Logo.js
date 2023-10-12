import Image from "next/image";

export default function Logo({ src, alt, url, size = 50, className = null,  }) {
  return (
    <>
      <div className={className}>
        <a href={url} target="_blank">
          <Image src={src} width={size} height={size} alt={alt} />
        </a>
      </div>
    </>
  );
}
