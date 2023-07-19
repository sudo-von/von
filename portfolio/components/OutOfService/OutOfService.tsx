import { FC } from "react";
import Typography from "../Typography/Typography";

type OutOfServiceProps = {
  title: string;
  description: string;
};

const OutOfService: FC<OutOfServiceProps> = ({ title, description }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Typography variant="title" color="black">
        {title}
      </Typography>
      <Typography weight="light">|</Typography>
      <Typography weight="light">{description}</Typography>
    </div>
  );
};

export default OutOfService;
