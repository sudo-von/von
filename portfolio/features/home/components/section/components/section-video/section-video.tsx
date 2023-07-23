import { FC } from "react";

type SectionVideoProps = {
  src: string;
  title: string;
};

const SectionVideo: FC<SectionVideoProps> = ({ src, title }) => {
  return (
    <div className="flex justify-center items-center">
      <iframe
        src={src}
        title={title}
        allowFullScreen
        className="outline-none rounded w-full sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-10/12 h-60 sm:h-72 md:h-80 lg:h-96"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default SectionVideo;
