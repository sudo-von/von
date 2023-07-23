import { FC } from "react";
import Image from "next/image";
import Section from "../section/section";
import Typography from "../../../../components/typography/typography";
import SectionContainer from "../section/components/section-container/section-container";
import ExperienceCompany from "./components/experience-company/experience-company";

type Company = {
  src: string;
  name: string;
  date: string;
  position: string;
};

type ExperienceSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  companies: Company[];
};

const ExperienceSection: FC<ExperienceSectionProps> = ({
  title,
  subtitle,
  description,
  companies = [],
}) => {
  return (
    <SectionContainer>
      <Section title={title} subtitle={subtitle} description={description} />
      <div className="flex flex-col justify-center items-center gap-8">
        {companies.map(({ src, name, date, position }) => (
          <ExperienceCompany
            key={name}
            src={src}
            name={name}
            date={date}
            position={position}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
