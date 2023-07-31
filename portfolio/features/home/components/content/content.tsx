import { FC } from "react";
import Media, { MediaProps } from "../media/media";
import Section, { SectionProps } from "../section/section";

export type ContentProps = SectionProps & MediaProps;

const Content: FC<ContentProps> = ({ media, title, subtitle, description }) => {
  return (
    <>
      <Section title={title} subtitle={subtitle} description={description} />
      <Media media={media} />
    </>
  );
};

export default Content;
