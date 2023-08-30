import { FC } from "react";
import Title from "./components/title/title";
import Subtitle from "./components/subtitle/subtitle";
import Description from "./components/description/description";

export type SectionProps = {
  description: string;
  subtitle: string;
  title: string;
};

const Section: FC<SectionProps> = ({ description, subtitle, title }) => {
  return (
    <section className="flex flex-col gap-6 justify-center text-center lg:text-start">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </section>
  );
};

export default Section;
