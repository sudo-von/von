import { FC } from "react";
import Typography from "../typography/typography";

type OutOfServiceProps = {
  title: string;
  description: string;
};

const OutOfService: FC<OutOfServiceProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Typography color="black" variant="title">
        {title}
      </Typography>
      <Typography weight="light" color="slate" variant="caption">
        |
      </Typography>
      <Typography weight="light" color="slate" variant="caption">
        {description}
      </Typography>
    </div>
  );
};

export default OutOfService;
