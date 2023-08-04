import { FC } from "react";
import Typography from "../typography/typography";

type OutOfServiceProps = {
  title: string;
  description: string;
};

const OutOfService: FC<OutOfServiceProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Typography color="black" component="h1" weight="bold" variant="title">
        {title}
      </Typography>
      <Typography
        color="slate"
        component="span"
        weight="light"
        variant="caption"
      >
        |
      </Typography>
      <Typography
        color="slate"
        component="span"
        weight="light"
        variant="caption"
      >
        {description}
      </Typography>
    </div>
  );
};

export default OutOfService;
