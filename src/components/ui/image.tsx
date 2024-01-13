import React from "react";
import Image from "next/image";
interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  layout?: "fixed" | "intrinsic" | "responsive" | undefined;
  width?: number;
  height?: number;
}

const NextImage: React.FC<ImageProps> = ({
  src,
  alt = "",
  className,
  layout = "responsive",
  width = 0,
  height = 0,
}) => {
  const srcString = src;
  return (
    <Image
      width={width}
      layout={layout}
      height={height}
      src={srcString}
      alt={alt}
      className={className}
    />
  );
};

NextImage.displayName = "Image";

export default NextImage;
