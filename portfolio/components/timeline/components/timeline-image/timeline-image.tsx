import { FC } from "react";
import Image from "next/image";

type TimelineImageProps = {
  alt: string;
  src: string;
};

const TimelineImage: FC<TimelineImageProps> = ({ alt, src }) => {
  return (
    <div className="relative h-16 md:h-20 lg:h-20 w-32 md:w-36 lg:w-20">
      <Image
        fill
        src={src}
        alt={alt}
        className="rounded object-cover h-full w-full"
      />
    </div>
  );
};

export default TimelineImage;
