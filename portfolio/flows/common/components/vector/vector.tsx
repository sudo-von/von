import { FC } from "react";
import Image from "next/image";
import useSaturation from "../../hooks/use-saturation/use-saturation";

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
      className="rounded-lg object-contain h-full w-full cursor-pointer saturate-0 duration-1000 transition"
    />
  );
};

export default Vector;
