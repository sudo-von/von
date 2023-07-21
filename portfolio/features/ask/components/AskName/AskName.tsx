import { FC } from "react";
import Typography from "../../../../components/Typography/Typography";

type AskNameProps = {
  name: string;
};

const AskName: FC<AskNameProps> = ({ name }) => {
  return (
    <Typography variant="heading" weight="bold" color="black">
      {name}
    </Typography>
  );
};

export default AskName;
