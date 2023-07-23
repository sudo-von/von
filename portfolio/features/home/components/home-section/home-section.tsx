import { FC } from "react";
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
    <div className="flex flex-col justify-center text-center lg:text-start gap-8">
      <Typography variant="title" weight="regular" whitespace="pre">
        {title}
      </Typography>
      <Typography variant="subtitle" weight="light" whitespace="pre">
        {subtitle}
      </Typography>
      <Typography
        variant="caption"
        color="slate"
        weight="light"
        whitespace="pre"
      >
        {description}
      </Typography>
    </div>
  );
};

export default HomeSection;
