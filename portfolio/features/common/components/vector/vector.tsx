import { FC } from "react";
import Image from "next/image";
import useSaturation from "../../hooks/useSaturation/useSaturation";

export type VectorProps = {
  alt: string;
  src: string;
  onClick?: VoidFunction;
};

const Vector: FC<VectorProps> = ({ alt, src, onClick }) => {
  const { ref, handleOnMouseEnter } = useSaturation<HTMLImageElement>();
  return (
    <Image
      fill
      alt={alt}
      src={src}
      ref={ref}
      onClick={onClick}
      onMouseEnter={handleOnMouseEnter}
      className="object-contain h-full rounded w-full cursor-pointer saturate-0 duration-1000 transition-all"
    />
  );
};

export default Vector;
