import Image from "next/image"

export default function Logo({ src, alt, url, style }) {
    return (
        <>
            <div className={style}>
                <a href={url} target="_blank">
                    <Image
                        src={src}
                        fill={true}
                        alt={alt}
                    />
                </a>
            </div>
        </>
    )
}