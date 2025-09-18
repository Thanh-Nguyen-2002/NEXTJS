"use client"
import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "alt"> {
    src?: string | null;
    alt?: string | null;
    fallbackSrc?: string;
}

export default function ImageWithFallback({
    src,
    alt,
    fallbackSrc = "/images/default.png",
    ...props
}: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

    return (
        <Image
            src={imgSrc}
            alt={alt || "image"}
            onError={() => setImgSrc(fallbackSrc)}
            {...props}
        />
    );
}
