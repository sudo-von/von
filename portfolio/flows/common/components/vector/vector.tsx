import { forwardRef } from "react";
import Image from "next/image";

export type VectorProps = {
  alt: string;
  isSaturated?: boolean;
  src: string;
  onClick?: VoidFunction;
  onMouseEnter?: VoidFunction;
};

const Vector = forwardRef<HTMLImageElement, VectorProps>(
  ({ alt, isSaturated, src, onClick, onMouseEnter }, ref) => {
    const saturationClassName = isSaturated ? "duration-1000 transition saturate-0" : "";
    const className = `${saturationClassName} rounded-lg object-contain h-full w-full cursor-pointer`;
    return (
      <Image
        alt={alt}
        className={className}
        fill
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        ref={ref}
        src={src}
        title={alt}
      />
    );
  }
);

Vector.displayName = "Vector";

export default Vector;
