import { FC } from "react";
import SectionVideo from "../section/components/section-video/section-video";
import Section from "../section/section";
import SectionContainer from "../section/components/section-container/section-container";

type AboutSectionProps = {
  src: string;
  title: string;
  subtitle: string;
  description: string;
};

const AboutSection: FC<AboutSectionProps> = ({
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

export default AboutSection;
