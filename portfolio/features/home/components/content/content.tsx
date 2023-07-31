import { FC } from "react";
import Media from "../media/media";
import Section from "../section/section";
import { IContent } from "../../entities/content-entity/content-entity";

type ContentProps = IContent;

const Content: FC<ContentProps> = ({ title, subtitle, description, media }) => {
  return (
    <>
      <Section title={title} subtitle={subtitle} description={description} />
      <Media media={media} />
    </>
  );
};

export default Content;
