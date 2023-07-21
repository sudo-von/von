import { FC } from "react";
import Typography from "../../../../components/Typography/Typography";

type AskInterestProps = {
  interest: string;
};

const AskInterest: FC<AskInterestProps> = ({ interest }) => {
  return (
    <Typography variant="paragraph" weight="light" color="black">
      {interest}
    </Typography>
  );
};

export default AskInterest;
