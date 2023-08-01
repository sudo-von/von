import { FC } from "react";
import Vector, {
  VectorProps,
} from "../../../../../../components/vector/vector";

export type MediaVectorListProps = {
  vectors: VectorProps[];
};

const MediaVectorList: FC<MediaVectorListProps> = ({ vectors }) => {
  return (
    <div className="flex flex-wrap w-full max-w-xs sm:max-w-md lg:max-w-lg gap-4">
      {vectors.map((vector) => (
        <div
          key={vector.src}
          className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        >
          <Vector
            alt={vector.alt}
            src={`/svg/media/technologies/${vector.src}`}
          />
        </div>
      ))}
    </div>
  );
};

export default MediaVectorList;
