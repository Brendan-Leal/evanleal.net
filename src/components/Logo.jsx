import Image from "next/image";

export default function Logo({
  src,
  alt,
  url,
  onMouseEnter,
  onMouseLeave,
  size = 50,
  className = null,
}) {
  return (
    <>
      <div
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <a href={url} target="_blank">
          <Image src={src} width={size} height={size} alt={alt} priority />
        </a>
      </div>
    </>
  );
}
