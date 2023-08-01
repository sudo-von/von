import { forwardRef } from "react";
import Image from "next/image";

export type VectorProps = {
  alt: string;
  src: string;
  onClick?: VoidFunction;
};

const Vector = forwardRef<HTMLImageElement, VectorProps>(
  ({ alt, src, onClick }, ref) => {
    return (
      <Image
        className="object-contain h-full w-full cursor-pointer"
        onClick={onClick}
        alt={alt}
        src={src}
        ref={ref}
        fill
      />
    );
  }
);
Vector.displayName = "Vector";

export default Vector;
