import { FC } from "react";
import Image from "next/image";
import { ImgOptions, ImgRounded } from "./img.types";
import useSaturation from "../../hooks/useSaturation/useSaturation";

export type ImgProps = {
  alt: string;
  src: string;
  rounded?: ImgRounded;
  onClick?: VoidFunction;
};

const options: ImgOptions = {
  rounded: {
    xs: "rounded",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  },
};

const Img: FC<ImgProps> = ({ alt, src, rounded, onClick }) => {
  const { ref, handleOnMouseEnter } = useSaturation<HTMLImageElement>();

  const roundedClassName = rounded ? options.rounded[rounded] : "";
  const filterClassName = "saturate-0 duration-1000 transition";
  const imgClassName = "object-contain h-full w-full cursor-pointer";
  const className = `${roundedClassName} ${imgClassName} ${filterClassName}`;
  return (
    <Image
      fill
      alt={alt}
      src={src}
      ref={ref}
      onClick={onClick}
      className={className}
      onMouseEnter={handleOnMouseEnter}
    />
  );
};

export default Img;
