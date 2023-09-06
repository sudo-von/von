import { FC } from "react";
import MediaVector, { MediaVectorProps } from "@home/components/media/components/media-vector/media-vector";

export type MediaVectorListProps = {
  vectors: MediaVectorProps[];
};

const baseSrc = "http://sudo-von.com:1337";

const MediaVectorList: FC<MediaVectorListProps> = ({ vectors }) => {
  return (
    <ul className="flex flex-wrap w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl gap-4 2xl:gap-8 mt-4 lg:mt-0">
      {vectors.map(({ alt, src }) => (
        <MediaVector alt={alt} key={src} src={`${baseSrc}${src}`} />
      ))}
    </ul>
  );
};

export default MediaVectorList;
