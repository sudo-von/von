import { FC } from "react";
import Media, { MediaProps } from "../media/media";
import Section, { SectionProps } from "../section/section";

export type ContentProps = SectionProps & MediaProps;

const Content: FC<ContentProps> = ({ media, title, subtitle, description }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-56 lg:mb-96">
      <Section title={title} subtitle={subtitle} description={description} />
      <Media media={media} />
    </div>
  );
};

export default Content;
