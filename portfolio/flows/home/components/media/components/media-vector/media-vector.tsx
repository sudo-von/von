import { FC } from "react";
import Vector, { VectorProps } from "@common/components/vector/vector";
import useSaturation from "@common/hooks/use-saturation/use-saturation";

export type MediaVectorProps = Omit<VectorProps, 'isSaturated' | 'onClick' | 'onMouseEnter'>;

const MediaVector: FC<MediaVectorProps> = ({ alt, src }) => {
  const { ref, handleOnMouseEnter } = useSaturation<HTMLImageElement>();
  return (
    <li className="relative w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16">
      <Vector alt={alt} isSaturated onMouseEnter={handleOnMouseEnter} ref={ref} src={src} />
    </li>
  );
};

export default MediaVector;
