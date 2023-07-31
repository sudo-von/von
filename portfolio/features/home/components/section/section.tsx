import { FC } from "react";
import SectionTitle from "./components/section-title/section-title";
import SectionSubtitle from "./components/section-subtitle/section-subtitle";
import SectionDescription from "./components/section-description/section-description";

export type SectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

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
