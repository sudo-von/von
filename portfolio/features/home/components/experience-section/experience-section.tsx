import { FC } from "react";
import Image from "next/image";
import Section from "../section/section";
import Typography from "../../../../components/typography/typography";
import SectionContainer from "../section/components/section-container/section-container";

type ExperienceSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const ExperienceSection: FC<ExperienceSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <SectionContainer>
      <Section title={title} subtitle={subtitle} description={description} />
      <div className="flex flex-row justify-center">
        <div className="flex items-center gap-2 h-min">
          <div className="flex flex-col h-min">
            <Image
              src="https://logodownload.org/wp-content/uploads/2014/04/intel-logo-1-1.png"
              width={70}
              height={70}
              alt="img"
              className="rounded"
            />
          </div>
          <div className="flex flex-col gap-1 h-min">
            <Typography variant="subtitle" weight="regular" whitespace="pre">
              Intel Corporation
            </Typography>
            <Typography variant="caption" color="slate" weight="light">
              Dec 2021 - Mar 2023
            </Typography>
            <Typography weight="light">Full stack engineer</Typography>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ExperienceSection;
