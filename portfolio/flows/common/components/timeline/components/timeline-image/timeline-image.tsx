import { FC } from "react";
import Image from "next/image";

type TimelineImageProps = {
  alt: string;
  src: string;
};

const TimelineImage: FC<TimelineImageProps> = ({ alt, src }) => {
  return (
    <Image
      fill
      alt={alt}
      src={src}
      className="rounded-lg lg:rounded-full object-contain h-full w-full"
    />
  );
};

export default TimelineImage;
