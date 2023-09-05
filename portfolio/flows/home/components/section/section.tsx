import { FC } from "react";
import Title from "@home/components/section/components/title/title";
import Subtitle from "@home/components/section/components/subtitle/subtitle";
import Description from "@home/components/section/components/description/description";

export type SectionProps = {
  description: string;
  subtitle: string;
  title: string;
};

const Section: FC<SectionProps> = ({ description, subtitle, title }) => {
  return (
    <section className="flex flex-col justify-center text-center lg:text-start gap-6">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </section>
  );
};

export default Section;
