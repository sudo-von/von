import { FC } from "react";
import SectionTitle from "./components/section-title/section-title";
import SectionSubtitle from "./components/section-subtitle/section-subtitle";
import SectionDescription from "./components/section-description/section-description";

type SectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const Section: FC<SectionProps> = ({ title, subtitle, description }) => {
  return (
    <div className="flex flex-col justify-center text-center lg:text-start gap-8">
      <SectionTitle>{title}</SectionTitle>
      <SectionSubtitle>{subtitle}</SectionSubtitle>
      <SectionDescription>{description}</SectionDescription>
    </div>
  );
};

export default Section;
