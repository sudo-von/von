import { FC } from "react";
import Media, { MediaProps } from "@home/components/media/media";
import Section, { SectionProps } from "@home/components/section/section";

export type ContentProps = SectionProps & MediaProps;

const Content: FC<ContentProps> = ({ description, media, subtitle, title }) => {
  return (
    <div className="grid grid-col lg:grid-cols-2 gap-6 mb-56 lg:mb-96">
      <Section description={description} subtitle={subtitle} title={title} />
      <Media media={media} />
    </div>
  );
};

export default Content;
