import { FC } from "react";
import Image from "next/image";

export type VectorProps = {
  alt: string;
  src: string;
  onClick?: VoidFunction;
};

const Vector: FC<VectorProps> = ({ alt, src, onClick }) => {
  return (
    <Image
      className="object-contain h-full rounded w-full cursor-pointer hover:animate-pulse"
      onClick={onClick}
      alt={alt}
      src={src}
      fill
    />
  );
};

export default Vector;
