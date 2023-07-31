import { FC } from "react";
import SectionTitle from "./components/section-title/section-title";
import { ISection } from "../../entities/section-entity/section-entity";
import SectionSubtitle from "./components/section-subtitle/section-subtitle";
import SectionDescription from "./components/section-description/section-description";

type SectionProps = ISection;

const Section: FC<SectionProps> = ({ title, subtitle, description }) => {
  return (
    <section className="flex flex-col gap-8 justify-center text-center lg:text-start">
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{subtitle}</SectionSubtitle>
      <SectionDescription>{description}</SectionDescription>
    </section>
  );
};

export default Section;
