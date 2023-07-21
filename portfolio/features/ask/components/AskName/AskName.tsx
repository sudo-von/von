import { FC } from "react";
import Typography from "../../../../components/typography/typography";

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
