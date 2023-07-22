import React, { FC } from "react";
import Typography from "../../../../components/typography/typography";

type HomeSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

const HomeSection: FC<HomeSectionProps> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <Typography variant="title" weight="regular">
        {title}
      </Typography>
      <Typography variant="subtitle" weight="light" whitespace="pre">
        {subtitle}
      </Typography>
      <Typography
        color="slate"
        variant="caption"
        weight="light"
        whitespace="pre"
      >
        {description}
      </Typography>
    </div>
  );
};

export default HomeSection;
