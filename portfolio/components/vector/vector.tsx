import { FC, useRef } from "react";
import Image from "next/image";

export type VectorProps = {
  src: string;
  alt: string;
};

const Vector: FC<VectorProps> = ({ src, alt }) => {
  const ref = useRef<HTMLImageElement | null>(null);

  const className = "object-contain h-full w-full cursor-pointer";

  const handleOnMouseOver = () => {
    if (ref.current) {
      ref.current.className = `${className} object-contain h-full w-full saturate-100 animate-pulse`;
    }
  };

  const handleOnMouseLeave = () => {
    if (ref.current) {
      ref.current.className = className;
    }
  };

  return (
    <Image
      onMouseOver={handleOnMouseOver}
      onMouseLeave={handleOnMouseLeave}
      alt={alt}
      src={src}
      ref={ref}
      className={className}
      fill
    />
  );
};

export default Vector;
