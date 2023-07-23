import { FC } from "react";
import Section from "../section/section";
import SectionVideo from "../section/components/section-video/section-video";
import SectionContainer from "../section/components/section-container/section-container";

type TechnologySectionProps = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

const TechnologySection: FC<TechnologySectionProps> = ({
  src,
  title,
  subtitle,
  description,
}) => {
  return (
    <SectionContainer>
      <Section title={title} subtitle={subtitle} description={description} />
      <SectionVideo src={src} title={title} />
    </SectionContainer>
  );
};

export default TechnologySection;
