import Image from "next/image";
import Typography from "../../../../../../components/typography/typography";
import { FC } from "react";

type ExperienceCompanyProps = {
  src: string;
  name: string;
  date: string;
  position: string;
};

const ExperienceCompany: FC<ExperienceCompanyProps> = ({
  src,
  name,
  date,
  position,
}) => {
  return (
    <div className="flex flex-row justify-start items-center gap-3 h-min w-80">
      <div className="relative h-20 w-20">
        <Image src={src} className="rounded object-cover" alt="img" fill />
      </div>
      <div className="flex flex-col gap-1 h-min">
        <Typography variant="subtitle">{name}</Typography>
        <Typography variant="caption" color="slate" weight="light">
          {date}
        </Typography>
        <Typography weight="light">{position}</Typography>
      </div>
    </div>
  );
};

export default ExperienceCompany;
