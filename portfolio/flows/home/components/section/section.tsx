import { FC } from "react";
import Title from "../../../common/components/title/title";
import Subtitle from "../../../common/components/subtitle/subtitle";
import Description from "../../../common/components/description/description";

export type SectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Section: FC<SectionProps> = ({ title, subtitle, description }) => {
  return (
    <section className="flex flex-col gap-8 justify-center text-center lg:text-start">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </section>
  );
};

export default Section;
