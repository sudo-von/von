import { FC } from "react";
import Vector, { VectorProps } from "@common/components/vector/vector";

export type MediaVectorListProps = {
  vectors: VectorProps[];
};

const MediaVectorList: FC<MediaVectorListProps> = ({ vectors }) => {
  const baseSrc = "http://localhost:1337";
  return (
    <ul className="flex flex-wrap w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl gap-4 2xl:gap-8 mt-4 lg:mt-0">
      {vectors.map(({ alt, src }) => (
        <li
          key={src}
          className="relative w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-16 2xl:h-16"
        >
          <Vector alt={alt} src={`${baseSrc}${src}`} />
        </li>
      ))}
    </ul>
  );
};

export default MediaVectorList;
