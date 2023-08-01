import { FC } from "react";
import Image from "next/image";

type TimelineImageProps = {
  alt: string;
  src: string;
};

const TimelineImage: FC<TimelineImageProps> = ({ alt, src }) => {
  return (
    <Image
      className="rounded object-cover h-full w-full"
      src={src}
      alt={alt}
      fill
    />
  );
};

export default TimelineImage;
